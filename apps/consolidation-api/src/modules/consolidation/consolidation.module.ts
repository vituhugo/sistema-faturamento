import { Module } from '@nestjs/common';
import { ConsolidationService } from './consolidation.service';
import { ConsolidationController } from './consolidation.controller';
import {Consolidation, Entry} from "@app/sql-database";
import {TypeOrmModule} from "@nestjs/typeorm";
import {CreateConsolidationService} from "./handle-services/create-consolidation.service";
import {ListConsolidationService} from "./handle-services/list-consolidation.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([Consolidation], 'db_consolidate'),
    TypeOrmModule.forFeature([Entry], 'db_entry_replica'),
  ],
  controllers: [ConsolidationController],
  providers: [
      ConsolidationService,
      CreateConsolidationService,
      ListConsolidationService,
  ],
})
export class ConsolidationModule {}
