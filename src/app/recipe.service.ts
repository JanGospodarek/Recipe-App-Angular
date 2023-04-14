import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipes/recipe.model';
import { Ingredient } from './shared/ingredient-model';
import { ShoppingListService } from './shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'test',
      'owefjiowejfiowej',
      'https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2022-05/Tomato-Pie_0256.jpg?itok=c63mh-z9',
      [new Ingredient('meat', 1), new Ingredient('dupa', 2)]
    ),
    new Recipe(
      'test2',
      'owefjiowejfiowej',
      'https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2022-05/Tomato-Pie_0256.jpg?itok=c63mh-z9',
      [new Ingredient('222', 1), new Ingredient('333', 2)]
    ),
  ];
  recipeSelected = new EventEmitter<Recipe>();
  constructor(private slService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
