/* eslint-disable prettier/prettier */
import { Nave_espacial } from '../Nave_espacial';
import { INoTripuladaAbastecimiento } from './interfaces/INoTripuladaAbastecimiento';
import { INoTripuladaCientifica } from './interfaces/INoTripuladaCientifica';

const NAVE_ABASTECIMIENTO = 'nave abastecimiento';
const NAVE_CIENTIFICA = 'nave cientifica';
export class No_tripulada
  extends Nave_espacial
  implements INoTripuladaAbastecimiento, INoTripuladaCientifica
{
  readonly #tipo_no_tripulada: string;

  constructor(
    nombre: string,
    velocidad: number,
    peso: number,
    capacidad_de_carga: number,
    sistema_de_propulsion: string,
    tipo_no_tripulada: string,
  ) {
    super(nombre, velocidad, peso, capacidad_de_carga, sistema_de_propulsion);
    this.#tipo_no_tripulada = tipo_no_tripulada;
  }

  abandonar_la_atmosfera(): void {
    this.velocidad = 42000;
  }

  modificar_trayectoria(): void {
    this.velocidad = this.velocidad - 10000;
  }

  abastecer_satelites(): string {
    if (this.#tipo_no_tripulada === NAVE_ABASTECIMIENTO) {
      return 'abasteciendo satelite en orbita';
    }

    return 'funcion errada';
  }

  estudiar_astros(): string {
    if (this.#tipo_no_tripulada === NAVE_CIENTIFICA) {
      return 'estudiando cuerpo celeste seleccionado';
    }

    return 'funcion errada';
  }

  get tipo_no_tripulada(): string {
    return this.#tipo_no_tripulada;
  } 
}
