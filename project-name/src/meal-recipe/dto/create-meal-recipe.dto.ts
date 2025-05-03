import { IsString, IsInt } from 'class-validator';

export class CreateMealRecipeDto {
  @IsString()
  mealId: string;

  @IsString()
  instructions: string;

  @IsInt()
  cookingTime: number;

  @IsInt()
  servings: number;

  isPublic?: boolean;
}
