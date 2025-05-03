import { IsString, IsNumber } from 'class-validator';

export class CreateMealIngredientDto {
  @IsString()
  mealRecipeId: string;

  @IsString()
  productId: string;

  @IsNumber()
  quantity: number;
}
