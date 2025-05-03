import { PrismaService } from 'src/prisma.service';
import { CreateMealRecipeDto } from './dto/create-meal-recipe.dto';
export declare class MealRecipeService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateMealRecipeDto): Promise<{
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
