import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
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
    
    public ingredientsChanged = new Subject<Ingredients[]>();

    public getIngredients(): Ingredients[] {
        return this.ingredients.slice();
    }

    public getIngredient(index: number): Ingredients{
        return this.ingredients[index];
    }

    public addIngredient(ingredient: Ingredients){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    public addIngredients(ingredients: Ingredients[]) {
       this.ingredients.push(...ingredients);
       this.ingredientsChanged.next(this.ingredients.slice());
       console.log(this.ingredients);
    }

}