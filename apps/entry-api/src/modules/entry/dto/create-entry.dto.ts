import {IsCurrency, IsDecimal, IsIn, IsNotEmpty, IsNumber, IsString} from "class-validator";
import {Transform} from "class-transformer";

export class CreateEntryDto {
    @IsIn(['credit', 'debit'])
    @IsNotEmpty()
    type: 'credit' | 'debit';
    @IsNumber({ maxDecimalPlaces: 2 })
    @IsNotEmpty()
    amount: number;
    @IsString()
    @IsNotEmpty()
    description: string;
}
