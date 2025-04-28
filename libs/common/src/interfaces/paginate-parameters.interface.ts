import {IsNumber, IsObject, IsOptional, ValidateNested} from "class-validator";
import {Transform} from "class-transformer";

export class PaginateParameters<T = Record<string, any>> {
    @IsObject()
    @IsOptional()
    @ValidateNested()
    filters?: T;
    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => Number(value))
    page: number = 1;
    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => Number(value))
    perPage: number = 20;
    @IsObject()
    @IsOptional()
    order?: Record<string, 'ASC' | 'DESC'>;
}