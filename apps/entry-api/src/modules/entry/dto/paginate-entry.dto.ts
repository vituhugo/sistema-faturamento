import {IsDate, IsDateString, IsIn, IsNumber, IsObject, IsOptional, ValidateNested} from "class-validator";
import {Transform, Type} from "class-transformer";

export class FiltersPaginateEntryDto {
    @IsIn(['credit', 'debit'])
    @IsOptional()
    type?: 'credit' | 'debit'
    @IsOptional()
    @Transform(({ value }) => new Date(value))
    @IsDate()
    date: Date = new Date();
}

export class PaginateEntryDto {
    @IsObject()
    @IsOptional()
    @ValidateNested()
    @Type(() => FiltersPaginateEntryDto)
    filters?: FiltersPaginateEntryDto = { date: new Date() };
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
    order?: Record<string, 'ASC' | 'DESC'> = { date: 'DESC' };
}