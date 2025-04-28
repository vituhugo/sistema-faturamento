import {OnEvent} from "@nestjs/event-emitter";
import {Consolidation} from "@app/sql-database";
import {Logger} from "@nestjs/common";

export class LoggerListener {
    constructor(private readonly logger: Logger) {}

    @OnEvent('job.start')
    handleJobStart() {
        this.logger.log('Starting job...');
    }

    @OnEvent('job.last_consolidation')
    handleLastConsolidation({ consolidation }: { consolidation: Consolidation | null }) {
        if (consolidation) {
            this.logger.log('Old Consolidation found!', { consolidation });
        } else {
            this.logger.log('No older consolidation found.');
        }
    }

    @OnEvent('job.end')
    handleJobEnd({ consolidation }: { consolidation: Consolidation }) {
        this.logger.log('New consolidation generate with success!', { consolidation });
    }
}