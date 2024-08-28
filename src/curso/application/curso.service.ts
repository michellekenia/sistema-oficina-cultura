import { Injectable } from '@nestjs/common';
import { Curso } from '../domain/curso';
import { CreateCursoCommand } from './commands/create-curso-command';
import { CursoFactory } from '../domain/factory/curso-factory';
import { CursoRepository } from './ports/curso-repository';


@Injectable()
export class CursoService {
  constructor(
    private readonly cursoFactory: CursoFactory,
    private readonly cursoRepository: CursoRepository

  ){}

  criar(createCursoCommand: CreateCursoCommand) {

    const novoCurso = this.cursoFactory.criar(
      createCursoCommand.nomeCurso,
      createCursoCommand.descricao
    )
    return this.cursoRepository.salvar(novoCurso)
  }

  listarCursos(): Promise<Curso[]> {
    return this.cursoRepository.listar();
  }

  buscarPorNome(createCurso: CreateCursoCommand){
    const cursoExiste = this.cursoRepository.buscarPorNome(
      createCurso.nomeCurso
    )
  }

}
