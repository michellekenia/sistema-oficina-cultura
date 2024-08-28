import { Controller, Get, Post, Body} from '@nestjs/common';
import { CursoService } from '../application/curso.service';
import { CreateCursoDto } from '../dto/create-curso.dto';
import { CreateCursoCommand } from '../application/commands/create-curso-command';

@Controller('cursos')
export class CursoController {
  constructor(private readonly cursoService: CursoService) {}

  @Post()
  criar(@Body() createCursoDto: CreateCursoDto) {
    return this.cursoService.criar(
      new CreateCursoCommand(createCursoDto.nomeCurso, createCursoDto.descricao)
    );
  }

  @Get()
  listarCursos() {
    return this.cursoService.listarCursos()
  }
}
