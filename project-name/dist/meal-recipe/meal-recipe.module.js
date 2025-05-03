"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealRecipeModule = void 0;
const common_1 = require("@nestjs/common");
const meal_recipe_service_1 = require("./meal-recipe.service");
const meal_recipe_controller_1 = require("./meal-recipe.controller");
const prisma_service_1 = require("../prisma.service");
let MealRecipeModule = class MealRecipeModule {
};
exports.MealRecipeModule = MealRecipeModule;
exports.MealRecipeModule = MealRecipeModule = __decorate([
    (0, common_1.Module)({
        controllers: [meal_recipe_controller_1.MealRecipeController],
        providers: [meal_recipe_service_1.MealRecipeService, prisma_service_1.PrismaService],
    })
], MealRecipeModule);
//# sourceMappingURL=meal-recipe.module.js.map