import { IsDateString, IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateMealLogDto {
  @IsString()
  mealId: string;

  @IsDateString()
  mealTime: string;

  @IsNumber()
  amount: number;

  @IsOptional()
  @IsNumber()
  breadUnits?: number;

  @IsOptional()
  @IsNumber()
  waterIntake?: number;
}
