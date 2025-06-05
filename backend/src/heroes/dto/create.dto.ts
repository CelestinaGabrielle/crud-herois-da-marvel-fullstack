/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsString, IsArray, ArrayNotEmpty } from 'class-validator';

export class CreateDto {
  @IsString()
  nome: string;

  @IsArray()
  @ArrayNotEmpty()
  habilidades: string[];

  @IsString()
  origem: string;
}
