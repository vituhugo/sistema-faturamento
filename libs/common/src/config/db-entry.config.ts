import {registerAs} from "@nestjs/config";
import {TypeOrmModuleOptions} from "@nestjs/typeorm";

export default registerAs('db_entry', () => ({
    type: 'postgres',
    host: process.env.DB_ENTRY_HOST,
    database: process.env.DB_ENTRY_NAME ?? 'postgres',
    username: process.env.DB_ENTRY_USER ?? 'postgres',
    password: process.env.DB_ENTRY_PASS ?? 'postgres',
    port: Number(process.env.DB_ENTRY_PORT) || 5432,
    autoLoadEntities: true,
    synchronize: true,
} as TypeOrmModuleOptions));