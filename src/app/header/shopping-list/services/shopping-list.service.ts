import { EventEmitter, Injectable } from "@angular/core";
import { Ingredients } from "../data/ingredients.model";

export class ShoppingListService {
   private ingredients: Ingredients[] = [
        {
            name: "Cucumbers",
            amount: 10
        },
        {
            name: "Eggs",
            amount: 2
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

    public addIngredients(ingredients: Ingredients[]) {
       this.ingredients.push(...ingredients);
       this.ingredientsChanged.emit(this.ingredients.slice());
       console.log(this.ingredients);
    }

}