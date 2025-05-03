import { Module } from '@nestjs/common';
import { MealRecipeService } from './meal-recipe.service';
import { MealRecipeController } from './meal-recipe.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [MealRecipeController],
  providers: [MealRecipeService, PrismaService],
})
export class MealRecipeModule {}
