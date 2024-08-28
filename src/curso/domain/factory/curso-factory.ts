import { Injectable } from '@nestjs/common';
import { Curso } from '../curso';
import { randomUUID } from 'crypto';

@Injectable()
export class CursoFactory {
  criar(nomeCurso: string, descricao: string): Curso{
    const curso = new Curso();
    curso.id = randomUUID();
    curso.nomeCurso = nomeCurso;
    curso.descricao = descricao;
    curso.professores = []
    curso.alunos = [];
    return curso;
  }
}