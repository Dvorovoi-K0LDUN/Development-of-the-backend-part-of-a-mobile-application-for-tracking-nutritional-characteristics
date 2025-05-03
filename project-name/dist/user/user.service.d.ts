import { PrismaService } from 'src/prisma.service';
import { UpdateUserDto } from '../auth/dto/update-user.dto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    getMe(userId: string): Promise<{
        email: string;
        password: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        avatarPath: string;
        phone: string;
        waterIntakeGoal: number;
        currentWaterIntake: number;
    }>;
    updateProfile(userId: string, dto: UpdateUserDto): Promise<{
        email: string;
        password: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        avatarPath: string;
        phone: string;
        waterIntakeGoal: number;
        currentWaterIntake: number;
    }>;
}
