/* eslint-disable prettier/prettier */
import { IsDateString, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class  ComandoRegistrarLanzadera {
  @IsString()
  @ApiProperty()
  public nombre: string;

  @IsString()
  @ApiProperty()
  public velocidad: number;

  @IsDateString()
  @ApiProperty()
  public peso: number;

  @IsDateString()
  @ApiProperty()
  public capacidad_de_carga: number;

  @IsDateString()
  @ApiProperty()
  public sistema_de_propulsion: string;

  @IsDateString()
  @ApiProperty()
  public tipo_lanzadera: string;

  
}