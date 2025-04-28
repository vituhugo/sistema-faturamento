import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { EntryModule } from './modules/entry/entry.module';
import {ConfigModule} from "@nestjs/config";
import configuration from "./config/configuration";
import {TypeOrmModule} from "@nestjs/typeorm";
import dbEntryConfig from "@app/common/config/db-entry.config";

@Module({
  imports: [
      TypeOrmModule.forRootAsync(dbEntryConfig.asProvider()),
      EntryModule,
      ConfigModule.forRoot({
        load: [configuration],
        isGlobal: true,
      }),
  ],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
