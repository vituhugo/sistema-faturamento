import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import configuration from "./config/configuration";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConsolidationModule} from "./modules/consolidation/consolidation.module";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {ScheduleModule} from "@nestjs/schedule";
import dbConsolidateConfig from "@app/common/config/db-consolidate.config";
import dbEntryReplicaConfig from "@app/common/config/db-entry-replica.config";

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            name: "db_consolidate",
            ...dbConsolidateConfig.asProvider(),
        }),
        TypeOrmModule.forRootAsync({
            name: "db_entry_replica",
            ...dbEntryReplicaConfig.asProvider(),
        }),
        ConfigModule.forRoot({
            load: [configuration],
            isGlobal: true,
        }),
        ScheduleModule.forRoot(),
        ConsolidationModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
