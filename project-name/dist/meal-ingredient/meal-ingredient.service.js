"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealIngredientService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let MealIngredientService = class MealIngredientService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        return this.prisma.mealIngredient.create({
            data: {
                mealRecipeId: dto.mealRecipeId,
                productId: dto.productId,
                quantity: dto.quantity,
            },
        });
    }
    async findAll() {
        return this.prisma.mealIngredient.findMany();
    }
    async findOne(id) {
        return this.prisma.mealIngredient.findUnique({
            where: { id },
        });
    }
};
exports.MealIngredientService = MealIngredientService;
exports.MealIngredientService = MealIngredientService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MealIngredientService);
//# sourceMappingURL=meal-ingredient.service.js.map