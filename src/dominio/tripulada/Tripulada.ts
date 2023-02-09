/* eslint-disable prettier/prettier */
import { Nave_espacial } from '../Nave_espacial';

export class Tripulada extends Nave_espacial {
  readonly #capacidad_tripulantes: number;
  readonly #volumen_oxigeno: number;

  constructor(
    nombre: string,
    velocidad: number,
    peso: number,
    capacidad_de_carga: number,
    sistema_de_propulsion: string,
    capacidad_tripulantes: number,
    volumen_oxigeno: number,
  ) {
    super(nombre, velocidad, peso, capacidad_de_carga, sistema_de_propulsion);
    this.#capacidad_tripulantes = capacidad_tripulantes;
    this.#volumen_oxigeno = volumen_oxigeno;
  }

  abandonar_la_atmosfera(): void {
    this.velocidad = 42000;
  }

  modificar_trayectoria(): void {
    this.velocidad = this.velocidad - 10000;
  }

  aterrizar(): string {
    return `velocidad disminuida a 0 el ${this.sistema_de_propulsion} se ha apagado`;
  }

  medir_nivel_de_oxigeno(): string {
    return `nivel de oxigeno actual: ${this.#volumen_oxigeno * Math.random()} %`
  }

  get capacidad_tripulantes(): number {
    return this.#capacidad_tripulantes;
  }

  get volumen_oxigeno(): number {
    return this.#volumen_oxigeno;
  }
}
