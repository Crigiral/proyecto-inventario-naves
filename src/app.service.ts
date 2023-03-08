/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ComandoRegistrarLanzadera } from './aplicacion/lanzadera/ComandoRegistrarLanzadera';

@Injectable()
export class AppService {
  getNaves(): string {
    return 'Hello World!';
  }

  getNewNave(objeto: string): string {
    return `nombre de la nave: ${(objeto).toString()}`;
  }
}
