import { Injectable } from '@nestjs/common';
import { CreateEntryDto } from './dto/create-entry.dto';
import {Between, Repository} from "typeorm";
import {Entry} from "@app/sql-database";
import {PaginateEntryDto} from "./dto/paginate-entry.dto";
import {DateTime} from "luxon";
import {ConfigService} from "@nestjs/config";
import {InjectRepository} from "@nestjs/typeorm";
import { Paginate } from '@app/common';

@Injectable()
export class EntryService {

  constructor(
      @InjectRepository(Entry)
      private readonly entryRepository: Repository<Entry>,
      private readonly config: ConfigService,
  ) {
  }

  async create(data: CreateEntryDto): Promise<Entry> {
    return this.entryRepository.save({
      ...data,
      date: new Date(),
    });
  }

  async paginate(params: PaginateEntryDto): Promise<Paginate<Entry>> {
    const where: any = {};

    const order = params.order
    const take = params.perPage ?? this.config.get('api.pagination.perPageDefault');
    const skip = take * (params.page - 1);

    const date = params.filters.date;
    const startOfDay = DateTime.fromJSDate(date).startOf('day').toJSDate();
    const endOfDay = DateTime.fromJSDate(date).endOf('day').toJSDate();
    where.date = Between(startOfDay, endOfDay);

    if (params?.filters?.type) {
      where.type = params.filters.type;
    }

    const total = await this.entryRepository.count({ where });

    const items = await this.entryRepository.find({
      where,
      skip,
      take,
      order,
    });

    return {
      items,
      metadata: {
        page: params.page,
        perPage: params.perPage ?? this.config.get('api.pagination.perPageDefault'),
        total,
        lastPage: Math.ceil(total / params.perPage),
        filter: {
          'date(Between)': where.date,
          ...(where.type ? { type: where.type } : {}),
        }
      }
    }
  }
}
