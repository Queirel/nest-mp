import { IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateUserDto {

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;

    @IsString()
    @IsOptional()
    readonly name?: string;
}