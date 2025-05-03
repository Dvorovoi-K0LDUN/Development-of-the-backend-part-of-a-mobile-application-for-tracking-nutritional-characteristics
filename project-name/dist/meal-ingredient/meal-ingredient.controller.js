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
exports.MealIngredientController = void 0;
const common_1 = require("@nestjs/common");
const meal_ingredient_service_1 = require("./meal-ingredient.service");
const create_meal_ingredient_dto_1 = require("../auth/dto/create-meal-ingredient.dto");
let MealIngredientController = class MealIngredientController {
    mealIngredientService;
    constructor(mealIngredientService) {
        this.mealIngredientService = mealIngredientService;
    }
    async create(createMealIngredientDto) {
        const mealIngredient = await this.mealIngredientService.create(createMealIngredientDto);
        return mealIngredient;
    }
    findAll() {
        return this.mealIngredientService.findAll();
    }
    findOne(id) {
        return this.mealIngredientService.findOne(id);
    }
};
exports.MealIngredientController = MealIngredientController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_meal_ingredient_dto_1.CreateMealIngredientDto]),
    __metadata("design:returntype", Promise)
], MealIngredientController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MealIngredientController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MealIngredientController.prototype, "findOne", null);
exports.MealIngredientController = MealIngredientController = __decorate([
    (0, common_1.Controller)('meal-ingredients'),
    __metadata("design:paramtypes", [meal_ingredient_service_1.MealIngredientService])
], MealIngredientController);
//# sourceMappingURL=meal-ingredient.controller.js.map