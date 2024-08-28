import { Module } from "@nestjs/common";
import { ApplicationBootstrapOptions } from "../commom/application-bootstrap-options.interface";

@Module({})
export class AdminCoreModule {

  static forRoot(options: ApplicationBootstrapOptions) {
    const imports = [];
    // options.driver === 'typeorm // aqui podem entrar multiplas configurações de banco de dados

    return {
      module: AdminCoreModule,
      imports,
    };
  }
}