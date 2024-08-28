import { Module } from '@nestjs/common';
import { InMemoryCursoPersistenceModule } from './persistencia/in-memory/in-memory-persistence.module';
import { InFileCursoPersistenceModule } from './persistencia/in-file/in-file-persistence.module';

@Module({})
export class CursoInfrastructureModule {
  static use(driver: 'in-file' | 'in-memory') {
    const persistenceModule =
      driver === 'in-file'
        ? InFileCursoPersistenceModule
        : InMemoryCursoPersistenceModule;

    return {
      module: CursoInfrastructureModule,
      imports: [persistenceModule],
      exports: [persistenceModule],
    };
  }
}
