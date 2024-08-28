import { Module } from '@nestjs/common'
import { ApplicationBootstrapOptions } from 'src/aluno/common/interfaces/application-bootstrap-options.interface';



@Module ({})
export class CursoCoreModule {
    static forRoot(options: ApplicationBootstrapOptions) {
        const imports = []

        return{
            module: CursoCoreModule,
            imports
        }
    }
}