import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlunoCoreModule} from './aluno/core/core.module';
import { ApplicationBootstrapOptions } from './aluno/common/interfaces/application-bootstrap-options.interface';
import { AlunoModule } from './aluno/application/aluno.module';
import { AlunoInfrastructureModule } from './aluno/infrastructure/aluno-infrastructure.module';
import { CursoCoreModule } from './curso/core/core.module';
import { CursoModule } from './curso/application/curso.module';
import { CursoInfrastructureModule } from './curso/infraestrutura/curso-infrastructure.module';
import { AdminModule } from './admin/admin.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [AlunoCoreModule, CursoCoreModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
  exports: []
})
export class AppModule {
  static register(options: ApplicationBootstrapOptions) {
    return {
      module: AppModule,
      imports: [
        AlunoCoreModule.forRoot(options), // Aqui entram as opções de configuração do banco de dados
        AlunoModule.comInfraestrutura(
          AlunoInfrastructureModule.use(options.driver),
        ),
        CursoCoreModule.forRoot(options),
        CursoModule.comInfraestrutura(
          CursoInfrastructureModule.use(options.driver),
        ), 
      ],
    };
  }
}
