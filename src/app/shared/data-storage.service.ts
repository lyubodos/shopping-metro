import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../header/recipes/data/recipe.model";
import { RecipeService } from "../header/recipes/services/recipe.service";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
    
    constructor(private httpService: HttpClient, private recipeService: RecipeService) {}


    public storeRecipes() {
        const recipes: Recipe[] = this.recipeService.getRecipes();
        this.httpService.put(`https://shopping-metro-default-rtdb.europe-west1.firebasedatabase.app/recipes.json`, recipes)
        .subscribe(res => {
            console.log(res);
        })

    }
}