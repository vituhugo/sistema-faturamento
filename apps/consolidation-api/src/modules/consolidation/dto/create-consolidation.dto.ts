import {IsDate, IsOptional} from "class-validator";
import {Transform} from "class-transformer";

export class CreateConsolidationDto {
    @IsOptional()
    @Transform(({ value }) => new Date(value))
    @IsDate()
    startPeriod?: Date;
    @Transform(({ value }) => new Date(value))
    @IsDate()
    endPeriod: Date;
}