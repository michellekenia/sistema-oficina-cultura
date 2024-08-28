import { Aluno } from "src/aluno/domain/aluno";

export class CursoEntity {
    id: string;
    nomeCurso: string;
    descricao: string;
    professores: string[];
    alunos: Aluno[] ;
  }