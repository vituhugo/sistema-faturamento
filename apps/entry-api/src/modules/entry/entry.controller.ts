import {Controller, Get, Post, Body, Query} from '@nestjs/common';
import { EntryService } from './entry.service';
import { CreateEntryDto } from './dto/create-entry.dto';
import { Entry } from '@app/sql-database';
import {PaginateEntryDto} from "./dto/paginate-entry.dto";
import {Paginate} from '@app/common';

@Controller('entry')
export class EntryController {
  constructor(private readonly entryService: EntryService) {}

  @Post()
  create(@Body() createEntryDto: CreateEntryDto) {
    return this.entryService.create(createEntryDto);
  }

  @Get()
  paginate(@Query() params: PaginateEntryDto): Promise<Paginate<Entry>> {
    return this.entryService.paginate(params);
  }
}
