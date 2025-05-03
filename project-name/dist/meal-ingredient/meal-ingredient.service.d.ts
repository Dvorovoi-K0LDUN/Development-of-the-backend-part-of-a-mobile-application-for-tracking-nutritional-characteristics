import { PrismaService } from 'src/prisma.service';
import { CreateMealIngredientDto } from '../auth/dto/create-meal-ingredient.dto';
export declare class MealIngredientService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateMealIngredientDto): Promise<{
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
