import { EventEmitter } from "@angular/core";
import { Ingredients } from "../data/ingredients.model";

export class ShoppingListService {
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
    
    public ingredientsChanged = new EventEmitter<Ingredients[]>();

    public getIngredients(): Ingredients[] {
        return this.ingredients.slice();
    }

    public getIngredient(index: number): Ingredients{
        return this.ingredients[index];
    }

    public addIngredient(ingredient: Ingredients){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}