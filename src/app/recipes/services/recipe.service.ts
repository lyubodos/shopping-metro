import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredients } from '../../shopping-list/data/ingredients.model';
import { ShoppingListService } from '../../shopping-list/services/shopping-list.service';
import { Recipe } from '../data/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [];

  public recipesChanged = new Subject<Recipe[]>();

  constructor(private slService: ShoppingListService) {}

  public setRecipes(recipes: Recipe[]): void {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice()); 
  }

  public getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  public getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  public addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  public updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  public deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  public addIngrToShoppingList(ingredients: Ingredients[]): void {
    this.slService.addIngredients(ingredients);
  }
}
