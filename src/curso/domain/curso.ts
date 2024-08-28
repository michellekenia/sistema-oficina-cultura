import { Aluno } from "src/aluno/domain/aluno";

export class Curso {
    id: string;
    nomeCurso: string;
    descricao: string;
    professores: string[];
    alunos: Aluno[];
  }