/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ComandoRegistrarLanzadera } from './aplicacion/lanzadera/ComandoRegistrarLanzadera';

@Injectable()
export class AppService {
  getNaves(): string {
    return 'Hello World!';
  }

  getNewNave(comandoRegistrarLanzadera: ComandoRegistrarLanzadera): string {
    return `nombre de la nave: ${(comandoRegistrarLanzadera.nombre).toString()}
    velocidad: ${(comandoRegistrarLanzadera.velocidad).toString()}
    peso: ${(comandoRegistrarLanzadera.peso).toString()}
    capacidad de carga: ${(comandoRegistrarLanzadera.capacidad_de_carga).toString()}
    sistema de propulsión: ${(comandoRegistrarLanzadera.sistema_de_propulsion).toString()}
    tipo de lanzadera: ${(comandoRegistrarLanzadera.tipo_lanzadera).toString()}`;
  
  }
}
