import { IsNumber, IsString, IsOptional, IsDateString } from 'class-validator';

export class CreateGoalDto {
  @IsNumber()
  targetCalories: number;

  @IsNumber()
  targetProteins: number;

  @IsNumber()
  targetFats: number;

  @IsNumber()
  targetCarbs: number;

  @IsNumber()
  targetWaterIntake: number;

  @IsNumber()
  targetBreadUnits: number;

  @IsNumber()
  currentWeight: number;

  @IsNumber()
  targetWeight: number;

  @IsString()
  @IsOptional()
  activityLevel?: string;

  @IsDateString()
  startDate: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;
}

