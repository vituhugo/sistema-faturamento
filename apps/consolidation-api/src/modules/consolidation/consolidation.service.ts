import { Injectable } from '@nestjs/common';
import {Consolidation} from "@app/sql-database";
import {CreateConsolidationService} from "./handle-services/create-consolidation.service";
import {CreateConsolidationDto} from "./dto/create-consolidation.dto";
import {PaginateParameters} from "@app/common";
import {ListConsolidationService} from "./handle-services/list-consolidation.service";

@Injectable()
export class ConsolidationService {
    constructor(
        private readonly createConsolidationService: CreateConsolidationService,
        private readonly listConsolidationService: ListConsolidationService,
    ) {}

    async create(data: CreateConsolidationDto): Promise<Consolidation> {
        return this.createConsolidationService.handle(data);
    }

    async list(params: PaginateParameters) {
        return this.listConsolidationService.handle(params);
    }
}
