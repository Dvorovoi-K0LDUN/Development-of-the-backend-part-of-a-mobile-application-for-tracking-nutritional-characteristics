import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductDto: CreateProductDto): Promise<{
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
