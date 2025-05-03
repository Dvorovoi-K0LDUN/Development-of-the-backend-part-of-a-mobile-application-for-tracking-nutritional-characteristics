import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { MealModule } from './meal/meal.module';
import { MealLogModule } from './meal-log/meal-log.module';
import { WaterIntakeModule } from './water-intake/water-intake.module';
import { GoalModule } from './goal/goal.module';
import { MealIngredientModule } from './meal-ingredient/meal-ingredient.module';
import { MealRecipeModule } from './meal-recipe/meal-recipe.module';
import { ProductModule } from './product/product.module';


@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UserModule, MealModule, MealLogModule, WaterIntakeModule, GoalModule, MealIngredientModule, MealRecipeModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
