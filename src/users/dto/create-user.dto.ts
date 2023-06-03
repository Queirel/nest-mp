import { IsInt, IsPositive, IsString, Min, MinLength, Validate, isOctal } from "class-validator";

export class CreateUserDto {

    @IsInt()
    @IsPositive()
    @Min(1)
    no: number;

    @IsString()
    @MinLength(1)
    name: string;
}