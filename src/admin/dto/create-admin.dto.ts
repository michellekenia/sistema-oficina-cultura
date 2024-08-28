import { IsNotEmpty, IsString } from "class-validator"
export class CreateAdminDto {

    @IsNotEmpty()
    @IsString()
    emailAluno: string

    @IsNotEmpty()
    @IsString()
    nomeCurso: string
    
}
