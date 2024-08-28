export class CreateCursoCommand {
    constructor(
        public readonly nomeCurso: string,
        public readonly descricao: string
    ){}
}