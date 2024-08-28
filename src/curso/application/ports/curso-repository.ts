import { Curso } from "src/curso/domain/curso";


export abstract class CursoRepository {
  abstract salvar(curso: Curso): Promise<Curso>;
  abstract listar(): Promise<Curso[]>;
  abstract buscarPorNome(nomeCurso: string): Promise<Curso>
}