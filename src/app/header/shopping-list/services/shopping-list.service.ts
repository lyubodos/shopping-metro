import { EventEmitter } from "@angular/core";
import { Ingredients } from "../data/ingredients.model";

export class shoppingListService {
   private ingredients: Ingredients[] = [
        {
            name: "Apples",
            amount: 5
        },
        {
            name: "Tomatoes",
            amount: 11
        }
    ];
    
    public ingredientSelected = new EventEmitter<Ingredients>();

    public getIngredients(): Ingredients[] {
        return this.ingredients.slice();
    }

    public getIngredient(index: number): Ingredients{
        return this.ingredients[index];
    }
}