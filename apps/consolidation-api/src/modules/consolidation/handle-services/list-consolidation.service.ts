import {Injectable} from "@nestjs/common";
import {Between, Repository} from "typeorm";
import {Consolidation} from "@app/sql-database";
import {Paginate, PaginateParameters} from "@app/common";
import {DateTime} from "luxon";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class ListConsolidationService {
    constructor(
        @InjectRepository(Consolidation, 'db_consolidate')
        private readonly consolidationRepository: Repository<Consolidation>
    ) {
    }

    async handle(params: PaginateParameters): Promise<Paginate<Consolidation>> {
        const where: any = {};

        const take = params.perPage ?? 20;
        const skip = take * (params.page - 1);

        const total = await this.consolidationRepository.count({ where });

        const items = await this.consolidationRepository.find({
            where,
            skip,
            take,
            order: { periodEnd: 'DESC' },
        });

        return {
            items,
            metadata: {
                page: params.page,
                perPage: take,
                total,
                lastPage: Math.ceil(total / params.perPage),
            }
        }
    }

}