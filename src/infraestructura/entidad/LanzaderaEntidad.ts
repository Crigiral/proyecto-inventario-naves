/* eslint-disable prettier/prettier */
import {Entity, ObjectID, ObjectIdColumn, Column} from 'typeorm';

@Entity({name: 'lanzadera'})
export class LanzaderaEntidad {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    nombre: string;
    
    @Column()
    velocidad: number;

    @Column()
    peso: number;

    @Column()
    capacidad_de_carga: number;

    @Column()
    sistema_de_propulsion: string;

    @Column()
    tipo_lanzadera: string;

}