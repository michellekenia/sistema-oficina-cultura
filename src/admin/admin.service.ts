import { Injectable } from '@nestjs/common';
import { CursoRepository } from 'src/curso/application/ports/curso-repository';
import { AlunoRepository } from 'src/aluno/application/ports/aluno.repository';
import { Aluno } from 'src/aluno/domain/aluno';
import { Curso } from 'src/curso/domain/curso';

@Injectable()
export class AdminService {
constructor(  private readonly alunoRepository: AlunoRepository,
  private readonly cursoRepository: CursoRepository)
  {}

  buscarAlunoPorEmail(email: string): Promise <Aluno>{
    const aluno = this.alunoRepository.buscarPorEmail(email)
    return aluno
  }

  buscarCursoPorNome(nomeCurso: string): Promise <Curso>{
    const curso = this.cursoRepository.buscarPorNome(nomeCurso)
    return curso
  }

  async matricula(emailAluno: string, nomeCurso: string) {
    const curso = await this.cursoRepository.buscarPorNome(nomeCurso)
    const aluno = await this.alunoRepository.buscarPorEmail(emailAluno)

    curso.alunos.push(aluno)
    aluno.cursos.push(curso.nomeCurso)

  await this.cursoRepository.salvar(curso)
  await this.alunoRepository.salvar(aluno)

  }

}
