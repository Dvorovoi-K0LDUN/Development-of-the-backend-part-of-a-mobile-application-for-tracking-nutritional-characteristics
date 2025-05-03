import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MealRecipeService } from './meal-recipe.service';
import { CreateMealRecipeDto } from './dto/create-meal-recipe.dto';

@Controller('meal-recipes')
export class MealRecipeController {
  constructor(private readonly mealRecipeService: MealRecipeService) {}

  @Post()
  async create(@Body() createMealRecipeDto: CreateMealRecipeDto) {
    const mealRecipe = await this.mealRecipeService.create(createMealRecipeDto);
    return mealRecipe;
  }
  

  @Get()
  findAll() {
    return this.mealRecipeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mealRecipeService.findOne(id);
  }
}
