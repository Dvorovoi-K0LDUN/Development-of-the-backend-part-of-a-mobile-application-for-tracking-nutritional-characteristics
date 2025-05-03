import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateMealIngredientDto } from '../auth/dto/create-meal-ingredient.dto';

@Injectable()
export class MealIngredientService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateMealIngredientDto) {
    return this.prisma.mealIngredient.create({
      data: {
        mealRecipeId: dto.mealRecipeId,  // Здесь используем mealRecipeId, полученный от рецепта
        productId: dto.productId,
        quantity: dto.quantity,
      },
    });
  }
  

  async findAll() {
    return this.prisma.mealIngredient.findMany();
  }

  async findOne(id: string) {
    return this.prisma.mealIngredient.findUnique({
      where: { id },
    });
  }
}
