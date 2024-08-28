import { CursoEntity } from './persistencia/in-memory/curso.entity';
import { Curso } from '../domain/curso';

export class CursoMapper {
  static paraDominio(cursoEntity: CursoEntity): Curso {
    const model = new Curso();
    model.id = cursoEntity.id;
    model.nomeCurso = cursoEntity.nomeCurso;
    model.descricao = cursoEntity.descricao;
    model.professores = cursoEntity.professores;
    model.alunos = cursoEntity.alunos;

    return model;
  }

  static paraPersistencia(curso: Curso): CursoEntity {
    const entity = new CursoEntity();
    entity.id = curso.id;
    entity.nomeCurso = curso.nomeCurso;
    entity.descricao = curso.descricao;
    entity.professores = curso.professores;
    entity.alunos = curso.alunos;

    return entity
  }
}