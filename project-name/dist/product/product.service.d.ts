import { PrismaService } from 'src/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateProductDto): Promise<{
        id: string;
        name: string;
        calories: number;
        proteins: number;
        fats: number;
        carbs: number;
        breadUnits: number | null;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
        calories: number;
        proteins: number;
        fats: number;
        carbs: number;
        breadUnits: number | null;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        calories: number;
        proteins: number;
        fats: number;
        carbs: number;
        breadUnits: number | null;
    } | null>;
}
