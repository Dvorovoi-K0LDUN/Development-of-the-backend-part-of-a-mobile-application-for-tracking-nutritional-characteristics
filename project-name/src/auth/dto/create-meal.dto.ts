import { IsString, IsNumber, IsOptional, IsBoolean } from 'class-validator';

export class CreateMealDto {
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
  glycemicIndex?: number;

  @IsOptional()
  @IsNumber()
  glycemicLoad?: number;

  @IsOptional()
  @IsNumber()
  breadUnits?: number;

  @IsOptional()
  @IsBoolean()
  isPublic?: boolean;
}
