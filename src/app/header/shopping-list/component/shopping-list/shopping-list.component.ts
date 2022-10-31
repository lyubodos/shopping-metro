import { Component, OnInit } from "@angular/core";
import { Ingredients } from "../../data/ingredients.model";
import { shoppingListService } from "../../services/shopping-list.service";


@Component({
    selector: "app-shopping-list",
    templateUrl: "./shopping-list.component.html",
    styleUrls: ["./shopping-list.component.css"],
    providers: [shoppingListService]
})
export class ShoppingList implements OnInit {
    ingredients: Ingredients[];
    selectedIngrediens: Ingredients;

    constructor(private shoppingListService: shoppingListService){}

    ngOnInit(): void {
        this.ingredients = this.shoppingListService.getIngredients();
    }

    public loadIngredients(index: number){
        this.selectedIngrediens = this.shoppingListService.getIngredient(index);
        console.log(this.selectedIngrediens);
        
    }
}