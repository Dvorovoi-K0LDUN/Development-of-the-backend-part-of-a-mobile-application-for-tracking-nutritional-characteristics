import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MealIngredientService } from './meal-ingredient.service';
import { CreateMealIngredientDto } from '../auth/dto/create-meal-ingredient.dto';

@Controller('meal-ingredients')
export class MealIngredientController {
  constructor(private readonly mealIngredientService: MealIngredientService) {}

  @Post()
  async create(@Body() createMealIngredientDto: CreateMealIngredientDto) {
    const mealIngredient = await this.mealIngredientService.create(createMealIngredientDto);
    return mealIngredient;
  }
  

  @Get()
  findAll() {
    return this.mealIngredientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mealIngredientService.findOne(id);
  }
}
