/* eslint-disable prettier/prettier */
/*clase abstracta que representa los valores genéricos 
y abstractos de una nave espacial*/

// Estos serán los atributos de la clase padre nave espacial
export abstract class Nave_espacial {
  public nombre: string;
  public velocidad: number;
  public peso: number;
  public capacidad_de_carga: number;
  public sistema_de_propulsion: string;

  // el constructor se ejecutará al momento de la creación del objeto
  constructor(
    nombre: string,
    velocidad: number,
    peso: number,
    capacidad_de_carga: number,
    sistema_de_propulsion: string,
  ) {
    this.nombre = nombre;
    this.velocidad = velocidad;
    this.peso = peso;
    this.capacidad_de_carga = capacidad_de_carga;
    this.sistema_de_propulsion = sistema_de_propulsion;
  }

  // Estos serán los metodos de la clase padre nave espacial
  abstract abandonar_la_atmosfera(): void;

  abstract modificar_trayectoria(): void;

  get nombre_nave(): string {
    return this.nombre;
  }

  get velocidad_nave(): number {
    return this.velocidad;
  }

  get dimensiones_nave(): number {
    return this.peso;
  }

  get capacidad_nave(): number {
    return this.capacidad_de_carga;
  }

  get propulsion_nave(): string {
    return this.sistema_de_propulsion;
  }
}
