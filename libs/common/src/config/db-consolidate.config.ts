import {registerAs} from "@nestjs/config";
import {TypeOrmModuleOptions} from "@nestjs/typeorm";

export default registerAs('db_consolidate', () => ({
    type: 'postgres',
    host: process.env.DB_CONSOLIDATE_HOST,
    database: process.env.DB_CONSOLIDATE_NAME ?? 'postgres',
    username: process.env.DB_CONSOLIDATE_USER ?? 'postgres',
    password: process.env.DB_CONSOLIDATE_PASS ?? 'postgres',
    port: Number(process.env.DB_CONSOLIDATE_PORT) || 5432,
    autoLoadEntities: true,
    synchronize: true,
} as TypeOrmModuleOptions));