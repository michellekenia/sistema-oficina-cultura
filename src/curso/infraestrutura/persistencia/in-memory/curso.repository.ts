import { Injectable } from '@nestjs/common';
import { CursoMapper } from './curso.mappers';
import { Curso } from 'src/curso/domain/curso';
import { CursoRepository } from 'src/curso/application/ports/curso-repository';
import { CursoEntity } from './curso.entity';

@Injectable()
export class InMemoryCursoRepository implements CursoRepository {
  buscarPorNome(nomeCurso: string): Promise<Curso> {
    throw new Error('Method not implemented.');
  }
  private readonly cursos = new Map<string, CursoEntity>();

  async salvar(curso: Curso): Promise<Curso> {
    const persistenceModel = CursoMapper.paraPersistencia(curso);
    this.cursos.set(persistenceModel.id, persistenceModel);
    const newEntity = this.cursos.get(persistenceModel.id);
    return CursoMapper.paraDominio(newEntity);
  }

  async listar(): Promise<Curso[]> {
    const entities = Array.from(this.cursos.values());
    return entities.map((item) => CursoMapper.paraDominio(item));
  }

}