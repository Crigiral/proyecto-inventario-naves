/* eslint-disable prettier/prettier */
import { Nave_espacial } from '../Nave_espacial';

export class Lanzadera extends Nave_espacial {
  readonly #tipo_lanzadera: string;

  constructor(
    nombre: string,
    velocidad: number,
    peso: number,
    capacidad_de_carga: number,
    sistema_de_propulsion: string,
    tipo_lanzadera: string,
  ) {
    // Con el super llamamos al constructor de la clase padre
    super(nombre, velocidad, peso, capacidad_de_carga, sistema_de_propulsion);
    this.#tipo_lanzadera = tipo_lanzadera;
  }

  abandonar_la_atmosfera(): void {
    this.velocidad = 42000;
  }

  modificar_trayectoria(): void {
    this.velocidad = this.velocidad - 10000;
  }

  get tipo_lanzadera(): string {
    return this.#tipo_lanzadera;
  }
}
