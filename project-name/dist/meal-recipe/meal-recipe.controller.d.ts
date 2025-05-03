import { MealRecipeService } from './meal-recipe.service';
import { CreateMealRecipeDto } from './dto/create-meal-recipe.dto';
export declare class MealRecipeController {
    private readonly mealRecipeService;
    constructor(mealRecipeService: MealRecipeService);
    create(createMealRecipeDto: CreateMealRecipeDto): Promise<{
        id: string;
        isPublic: boolean;
        mealId: string;
        instructions: string;
        cookingTime: number;
        servings: number;
    }>;
    findAll(): Promise<{
        id: string;
        isPublic: boolean;
        mealId: string;
        instructions: string;
        cookingTime: number;
        servings: number;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        isPublic: boolean;
        mealId: string;
        instructions: string;
        cookingTime: number;
        servings: number;
    } | null>;
}
