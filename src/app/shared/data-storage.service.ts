import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/data/recipe.model';
import { RecipeService } from '../recipes/services/recipe.service';
import { map, tap, take, exhaustMap} from 'rxjs/operators';
import { AuthServiceComponent } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private httpService: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthServiceComponent
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

  public fetchRecipes() {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        console.log(user.token);
        
        return this.httpService.get<Recipe[]>(
          `https://shopping-metro-default-rtdb.europe-west1.firebasedatabase.app/recipes.json?auth=${user.token}`
        );
      }),
      map((recipes) => {
        return recipes.map((recipe) => {
          return { ...recipe, ingredients: recipe.ingredients ?? [] 
          };
        });
      }),
      tap((recipes) => {
        this.recipeService.setRecipes(recipes);
      })
    );
  }
}
