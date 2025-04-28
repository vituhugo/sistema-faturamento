import {Injectable} from '@nestjs/common';
import {Consolidation} from "@app/sql-database";
import {Repository} from "typeorm";
import {DateTime} from "luxon";
import {ConfigService} from "@nestjs/config";
import {EventEmitter2} from "@nestjs/event-emitter";
import {InjectRepository} from "@nestjs/typeorm";
import {Cron} from "@nestjs/schedule";
import {ConsolidationService} from "../modules/consolidation/consolidation.service";

/**
 * CronJob de Consolidação, é realizado todos os dias às 2:30h da manhã.
 *
 * Realiza a somatória de todos os registros desde a última consolidação feita até as 2:00h.
 *
 * Como o banco é descentralizado, é importante haver um delay para dar tempo do banco sincronizar todos os registros.
 */
@Injectable()
export class ConsolidationTask {
    constructor(
        private readonly config: ConfigService,
        @InjectRepository(Consolidation)
        private readonly consolidationRepository: Repository<Consolidation>,
        private readonly eventEmitter: EventEmitter2,
        private readonly consolidationService: ConsolidationService,
    ) {}

    @Cron('0 30 8 * * *')
    async handle(): Promise<void> {
        this.eventEmitter.emit('job.start');
        const lastConsolidation = await this.getLastConsolidation();
        this.eventEmitter.emit('job.last_consolidation', { lastConsolidation });
        
        const consolidation = await this.consolidationService.create({
            endPeriod: this.generatePeriodEnd(),
            startPeriod: lastConsolidation?.periodEnd,
        })

        this.eventEmitter.emit('job.end', { consolidation });
    }

    private async getLastConsolidation() {
        return this.consolidationRepository.findOne({ order: { periodStart: 'DESC' }});
    }

    private generatePeriodEnd(): Date {
        return DateTime.now()
            .startOf('hour')
            .minus({ hour: this.config.get('job.waitingSyncDelayInHours') })
            .toJSDate()
    }
}
