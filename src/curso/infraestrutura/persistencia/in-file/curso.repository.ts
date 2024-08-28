import { Injectable } from "@nestjs/common";
import { CursoRepository } from "src/curso/application/ports/curso-repository";
import { Curso } from "src/curso/domain/curso";

@Injectable()
export class InFileCursoRepository implements CursoRepository{
    buscarPorNome(nomeCurso: string): Promise<Curso> {
        throw new Error("Method not implemented.");
    }
    async salvar(curso: Curso): Promise<Curso> {
        throw new Error("Method not implemented.");
    }
    async listar(): Promise<Curso[]> {
        throw new Error("Method not implemented.");
    }
}
