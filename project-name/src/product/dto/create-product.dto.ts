import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsNumber()
  calories: number;

  @IsNumber()
  proteins: number;

  @IsNumber()
  fats: number;

  @IsNumber()
  carbs: number;

  @IsOptional()
  @IsNumber()
  breadUnits?: number;
}
