import {registerAs} from "@nestjs/config";
import {TypeOrmModuleOptions} from "@nestjs/typeorm";
import * as process from "node:process";

export default registerAs('db_entry_replica', () => ({
    type: 'postgres',
    host: process.env.DB_ENTRY_REPLICA_HOST,
    database: process.env.DB_ENTRY_REPLICA_NAME ?? 'postgres',
    username: process.env.DB_ENTRY_REPLICA_USER ?? 'postgres',
    password: process.env.DB_ENTRY_REPLICA_PASS ?? 'postgres',
    port: Number(process.env.DB_ENTRY_REPLICA_PORT) || 5432,
    autoLoadEntities: true,
} as TypeOrmModuleOptions));