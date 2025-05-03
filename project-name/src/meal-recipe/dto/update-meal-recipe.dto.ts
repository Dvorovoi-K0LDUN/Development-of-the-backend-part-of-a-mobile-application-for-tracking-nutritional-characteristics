import { PartialType } from '@nestjs/mapped-types';
import { CreateMealRecipeDto } from './create-meal-recipe.dto';

export class UpdateMealRecipeDto extends PartialType(CreateMealRecipeDto) {}
