import {Body, Controller, Get, Post, Query} from '@nestjs/common';
import { ConsolidationService } from './consolidation.service';
import {CreateConsolidationDto} from "./dto/create-consolidation.dto";
import {Consolidation} from "@app/sql-database";
import {Paginate, PaginateParameters} from "@app/common";

@Controller('consolidation')
export class ConsolidationController {
  constructor(private readonly consolidationService: ConsolidationService) {}

  @Post()
  create(
      @Body() consolidationDto: CreateConsolidationDto
  ): Promise<Consolidation> {
    return this.consolidationService.create(consolidationDto);
  }

  @Get()
  list(
      @Query() paginateParameters: PaginateParameters
  ): Promise<Paginate<Consolidation>> {
    return this.consolidationService.list(paginateParameters);
  }
}
