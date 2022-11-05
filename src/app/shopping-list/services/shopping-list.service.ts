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
    public ingredientEdited = new Subject<number>();

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

    public updateIngredient(ingredientUpdate: Ingredients, index: number){
        this.ingredients[index] = ingredientUpdate;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    public deleteIngredient(index: number){
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());

    }

}