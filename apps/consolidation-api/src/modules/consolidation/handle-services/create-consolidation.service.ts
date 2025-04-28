import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Consolidation, Entry} from "@app/sql-database";
import {FindOptionsWhere, LessThanOrEqual, MoreThan, Repository} from "typeorm";
import {ConfigService} from "@nestjs/config";
import {CreateConsolidationDto} from "../dto/create-consolidation.dto";

@Injectable()
export class CreateConsolidationService {
    constructor(
        @InjectRepository(Entry, 'db_entry_replica')
        private readonly entryRepository: Repository<Entry>,
        private readonly config: ConfigService,
        @InjectRepository(Consolidation, 'db_consolidate')
        private readonly consolidationRepository: Repository<Consolidation>,
    ) {}

    async handle(createConsolidationDto: CreateConsolidationDto): Promise<Consolidation> {
        const consolidation = new Consolidation();
        consolidation.periodEnd = createConsolidationDto.endPeriod;
        consolidation.periodStart = createConsolidationDto.startPeriod;
        await this.fillConsolidationNumbers(consolidation);
        await this.consolidationRepository.save(consolidation);

        return consolidation;
    }

    private async fillConsolidationNumbers(
        consolidation: Consolidation,
    ): Promise<void> {
        const where:  FindOptionsWhere<Entry>[] = [ { date: LessThanOrEqual(consolidation.periodEnd) } ];
        if (consolidation.periodStart) {
            where.push({ date: MoreThan(consolidation.periodStart) })
        }

        for await (let entries of this.iterableFindEntries(where)) {
            if (!consolidation.startsAtId && entries.length) { consolidation.startsAtId = entries[0].id; }
            if (entries.length) { consolidation.endsAtId = entries[entries.length - 1].id; }

            consolidation.totalAmount = (entries ?? []).reduce(
                CreateConsolidationService.sumOrSubAmountByType,
                consolidation.totalAmount ?? 0
            );
            consolidation.numberOfRecords += entries.length;
        }
    }

    private static sumOrSubAmountByType(previous: number, { type, amount }: Entry): number {
        if (type === 'debit') { amount *= -1 }
        return previous + amount;
    }

    private async* iterableFindEntries(where, count = 0): AsyncGenerator<Entry[]> {
        const perBulk = this.config.get<number>('job.entriesPerBulk');

        const entries = await this.entryRepository.find({ where, skip: perBulk * count, take: perBulk });

        yield entries;

        if (entries.length === perBulk) {
            yield * this.iterableFindEntries(where, count + 1);
        }
    }
}