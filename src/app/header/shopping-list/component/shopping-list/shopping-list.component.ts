import { Component, OnInit } from "@angular/core";
import { Ingredients } from "../../data/ingredients.model";


@Component({
    selector: "app-shopping-list",
    templateUrl: "./shopping-list.component.html",
    styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingList implements OnInit {
    ingredients: Ingredients[] = [
        {
            name: "Apples",
            amount: 5
        },
        {
            name: "Tomaatoes",
            amount: 11
        }
    ]

    constructor(){}

    ngOnInit(): void {
        
    }
}