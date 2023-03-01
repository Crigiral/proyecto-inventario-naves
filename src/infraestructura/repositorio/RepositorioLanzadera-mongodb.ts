/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lanzadera } from 'src/dominio/lanzadera/Lanzadera';
import { Repository } from 'typeorm';
import { LanzaderaEntidad } from '../entidad/LanzaderaEntidad';

@Injectable()
export class RepositorioLanzaderaMongodb {
  constructor(
    @InjectRepository(LanzaderaEntidad)
    private readonly repositorio: Repository<LanzaderaEntidad>,
  ) {}

  async guardar(lanzadera: Lanzadera) {
    const entidad = new LanzaderaEntidad();
    entidad.nombre = lanzadera.nombre;
    entidad.velocidad = lanzadera.velocidad;
    entidad.peso = lanzadera.peso;
    entidad.capacidad_de_carga = lanzadera.capacidad_de_carga;
    entidad.tipo_lanzadera = lanzadera.tipo_lanzadera;
    entidad.sistema_de_propulsion = lanzadera.sistema_de_propulsion;

    await this.repositorio.save(entidad);
  }
}
