import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateMealRecipeDto } from './dto/create-meal-recipe.dto';

@Injectable()
export class MealRecipeService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateMealRecipeDto) {
    // Создаём рецепт
    const mealRecipe = await this.prisma.mealRecipe.create({
      data: {
        mealId: dto.mealId,
        instructions: dto.instructions,
        cookingTime: dto.cookingTime,
        servings: dto.servings,
        isPublic: dto.isPublic ?? false,
      },
    });
  
    return mealRecipe;
  }
  

  async findAll() {
    return this.prisma.mealRecipe.findMany();
  }

  async findOne(id: string) {
    return this.prisma.mealRecipe.findUnique({
      where: { id },
    });
  }
}
