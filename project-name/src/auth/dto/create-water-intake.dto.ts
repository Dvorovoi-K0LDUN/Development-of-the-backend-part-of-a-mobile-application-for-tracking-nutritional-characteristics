import { IsDateString, IsNumber, IsOptional } from 'class-validator';

export class CreateWaterIntakeDto {
  @IsOptional()  // Делаем поле не обязательным
  @IsDateString()
  date?: string;  // Принимаем дату, но она не обязательна

  @IsNumber()
  waterIntake: number;
}
