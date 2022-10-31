import { Component, OnInit } from "@angular/core";
import { Ingredients } from "../../data/ingredients.model";
import { ShoppingListService } from "../../services/shopping-list.service";


@Component({
    selector: "app-shopping-list",
    templateUrl: "./shopping-list.component.html",
    styleUrls: ["./shopping-list.component.css"],
    providers: [ShoppingListService]
})
export class ShoppingList implements OnInit {
    ingredients: Ingredients[];
    selectedIngrediens: Ingredients;

    constructor(private shoppingListService: ShoppingListService){}

    ngOnInit(): void {
        this.ingredients = this.shoppingListService.getIngredients();
        this.shoppingListService.ingredientsChanged.subscribe(ingredients =>{
            this.ingredients = ingredients;
        })
    }

    public loadIngredients(index: number){
        this.selectedIngrediens = this.shoppingListService.getIngredient(index);
        console.log(this.selectedIngrediens);
        
    }
}