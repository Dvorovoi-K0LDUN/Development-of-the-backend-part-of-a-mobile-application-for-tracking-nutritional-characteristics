import { PrismaService } from 'src/prisma.service';
import { CreateWaterIntakeDto } from '../auth/dto/create-water-intake.dto';
export declare class WaterIntakeService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: string, dto: CreateWaterIntakeDto): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        waterIntake: number;
        date: Date;
    }>;
    findAll(userId: string): Promise<{
        date: string;
        id: string;
        createdAt: Date;
        userId: string;
        waterIntake: number;
    }[]>;
}
