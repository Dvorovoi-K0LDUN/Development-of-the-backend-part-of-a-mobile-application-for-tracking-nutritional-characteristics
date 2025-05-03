"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMealRecipeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_meal_recipe_dto_1 = require("./create-meal-recipe.dto");
class UpdateMealRecipeDto extends (0, mapped_types_1.PartialType)(create_meal_recipe_dto_1.CreateMealRecipeDto) {
}
exports.UpdateMealRecipeDto = UpdateMealRecipeDto;
//# sourceMappingURL=update-meal-recipe.dto.js.map