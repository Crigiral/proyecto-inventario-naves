/* eslint-disable prettier/prettier */
import { Lanzadera } from 'src/dominio/lanzadera/Lanzadera';
import { RepositorioLanzaderaMongodb } from 'src/infraestructura/repositorio/RepositorioLanzadera-mongodb';
import { ComandoRegistrarLanzadera } from './ComandoRegistrarLanzadera';

export class ServiceNaveLanzadera {
  constructor(private readonly repositorioLanzadera: RepositorioLanzaderaMongodb) {}

  async ejecutar(comandoRegistrarLanzadera: ComandoRegistrarLanzadera) {
    await this.repositorioLanzadera.guardar(
      new Lanzadera(
        comandoRegistrarLanzadera.nombre,
        comandoRegistrarLanzadera.velocidad,
        comandoRegistrarLanzadera.peso,
        comandoRegistrarLanzadera.capacidad_de_carga,
        comandoRegistrarLanzadera.sistema_de_propulsion,
        comandoRegistrarLanzadera.tipo_lanzadera,
      ),
    );
  }
}
