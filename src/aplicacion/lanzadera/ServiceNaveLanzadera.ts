/* eslint-disable prettier/prettier */
import { Lanzadera } from 'src/dominio/lanzadera/Lanzadera';

export class ServiceNaveLanzadera {
  constructor(private readonly repositorioLanzadera: RepositorioLanzadera) {}

  async ejecutar(lanzadera: Lanzadera){
    await this.repositorioLanzadera.guardar(lanzadera);

  }
}
