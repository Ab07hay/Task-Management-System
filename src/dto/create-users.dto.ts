import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
export class CreateUsersDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly Username: string;
    @IsString()

    @MaxLength(30)
    @IsNotEmpty()
    readonly Password: string;
}