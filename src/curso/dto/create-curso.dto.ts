import { IsNotEmpty, IsString } from "class-validator";

export class CreateCursoDto {
  @IsNotEmpty()
  @IsString()
  nomeCurso: string;
  
  @IsNotEmpty()
  @IsString()
  descricao: string;
}