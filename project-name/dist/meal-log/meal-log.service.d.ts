import { PrismaService } from 'src/prisma.service';
import { CreateMealLogDto } from '../auth/dto/create-meal-log.dto';
export declare class MealLogService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: string, dto: CreateMealLogDto): Promise<{
        id: string;
        createdAt: Date;
        breadUnits: number | null;
        userId: string;
        mealId: string;
        mealTime: Date;
        amount: number;
        waterIntake: number | null;
        totalCalories: number;
        totalProteins: number;
        totalFats: number;
        totalCarbs: number;
    }>;
    findAll(userId: string): Promise<({
        meal: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            calories: number;
            proteins: number;
            fats: number;
            carbs: number;
            glycemicIndex: number | null;
            glycemicLoad: number | null;
            breadUnits: number | null;
            isPublic: boolean;
            userId: string;
        };
    } & {
        id: string;
        createdAt: Date;
        breadUnits: number | null;
        userId: string;
        mealId: string;
        mealTime: Date;
        amount: number;
        waterIntake: number | null;
        totalCalories: number;
        totalProteins: number;
        totalFats: number;
        totalCarbs: number;
    })[]>;
}
