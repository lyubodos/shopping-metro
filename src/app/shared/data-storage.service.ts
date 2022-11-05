import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/data/recipe.model';
import { RecipeService } from '../recipes/services/recipe.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private httpService: HttpClient,
    private recipeService: RecipeService
  ) {}

  public storeRecipes(): void {
    // const recipes: Recipe[] = this.recipeService.getRecipes();
    // this.httpService
    //   .put(
    //     `https://shopping-metro-default-rtdb.europe-west1.firebasedatabase.app/recipes.json`,
    //     recipes
    //   )
    //   .subscribe((res) => {
    //     console.log(res);
    //   });
  }

  public fetchRecipes(): void {
    this.httpService
      .get<Recipe[]>(
        `https://shopping-metro-default-rtdb.europe-west1.firebasedatabase.app/recipes.json`
      )
      .pipe(map(recipes => {
        return recipes.map(recipe => {
            return {...recipe, ingredients: recipe.ingredients ?? []}
        });
      }))
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
        console.log(recipes);
        
      });
  }
}
