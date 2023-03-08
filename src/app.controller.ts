/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body } from '@nestjs/common';
import { ComandoRegistrarLanzadera } from './aplicacion/lanzadera/ComandoRegistrarLanzadera';
import { ServiceNaveLanzadera } from './aplicacion/lanzadera/ServiceNaveLanzadera';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}

  @Get()
  getNaves(): string {
    return this.appService.getNaves();
  }

  @Post()
  async crearNaveEspacial(
    @Body() objeto: string
  ) {
    console.log(objeto)
    return this.appService.getNewNave(objeto);
  }
}
