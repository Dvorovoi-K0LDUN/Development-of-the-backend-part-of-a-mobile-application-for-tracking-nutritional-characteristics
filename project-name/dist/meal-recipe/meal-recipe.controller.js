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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealRecipeController = void 0;
const common_1 = require("@nestjs/common");
const meal_recipe_service_1 = require("./meal-recipe.service");
const create_meal_recipe_dto_1 = require("./dto/create-meal-recipe.dto");
let MealRecipeController = class MealRecipeController {
    mealRecipeService;
    constructor(mealRecipeService) {
        this.mealRecipeService = mealRecipeService;
    }
    async create(createMealRecipeDto) {
        const mealRecipe = await this.mealRecipeService.create(createMealRecipeDto);
        return mealRecipe;
    }
    findAll() {
        return this.mealRecipeService.findAll();
    }
    findOne(id) {
        return this.mealRecipeService.findOne(id);
    }
};
exports.MealRecipeController = MealRecipeController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_meal_recipe_dto_1.CreateMealRecipeDto]),
    __metadata("design:returntype", Promise)
], MealRecipeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MealRecipeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MealRecipeController.prototype, "findOne", null);
exports.MealRecipeController = MealRecipeController = __decorate([
    (0, common_1.Controller)('meal-recipes'),
    __metadata("design:paramtypes", [meal_recipe_service_1.MealRecipeService])
], MealRecipeController);
//# sourceMappingURL=meal-recipe.controller.js.map