import { Controller, Get } from '@nestjs/common';
import { ComandoRegistrarLanzadera } from './aplicacion/lanzadera/ComandoRegistrarLanzadera';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly serviceNaveLanzadera: ServiceNaveLanzadera,
  ) {}

  @Get()
  getNaves(): string {
    return this.appService.getNaves();
  }

  @Post()
  async crearNaveEspacial(
    @Body() comandoRegistrarLanzadera: ComandoRegistrarLanzadera,
  ) {}
}
