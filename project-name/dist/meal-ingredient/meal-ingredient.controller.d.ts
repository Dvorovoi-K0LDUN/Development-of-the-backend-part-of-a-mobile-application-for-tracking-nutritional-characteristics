import { MealIngredientService } from './meal-ingredient.service';
import { CreateMealIngredientDto } from '../auth/dto/create-meal-ingredient.dto';
export declare class MealIngredientController {
    private readonly mealIngredientService;
    constructor(mealIngredientService: MealIngredientService);
    create(createMealIngredientDto: CreateMealIngredientDto): Promise<{
        id: string;
        mealId: string | null;
        mealRecipeId: string;
        productId: string;
        quantity: number;
    }>;
    findAll(): Promise<{
        id: string;
        mealId: string | null;
        mealRecipeId: string;
        productId: string;
        quantity: number;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        mealId: string | null;
        mealRecipeId: string;
        productId: string;
        quantity: number;
    } | null>;
}
