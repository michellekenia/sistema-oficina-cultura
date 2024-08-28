import { DynamicModule, Module, Type } from '@nestjs/common';
import { CursoService } from './curso.service';
import { CursoController } from '../presenters/curso.controller';
import { CursoFactory } from '../domain/factory/curso-factory';

@Module({
  controllers: [CursoController],
  providers: [CursoService, CursoFactory],
})
export class CursoModule {
  static comInfraestrutura(infrastructureModule: Type | DynamicModule) {
    return {
      module: CursoModule,
      imports: [infrastructureModule], //Essa linha é onde ocorre a injeção do módulo de persistência.
    };
  }
}
