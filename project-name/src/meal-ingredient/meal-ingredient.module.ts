import { Module } from '@nestjs/common';
import { MealIngredientService } from './meal-ingredient.service';
import { MealIngredientController } from './meal-ingredient.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [MealIngredientController],
  providers: [MealIngredientService, PrismaService],
})
export class MealIngredientModule {}
