import { Component, OnDestroy, OnInit } from "@angular/core";
import { Ingredients } from "../../data/ingredients.model";
import { ShoppingListService } from "../../services/shopping-list.service";
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from "rxjs/operators";


@Component({
    selector: "app-shopping-list",
    templateUrl: "./shopping-list.component.html",
    styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingList implements OnInit, OnDestroy {
    private unsubscribe$ =  new Subject<void>();

    public ingredients: Ingredients[];
    public selectedIngrediens: Ingredients;
  

    constructor(private shoppingListService: ShoppingListService){}

    ngOnInit(): void {
        this.ingredients = this.shoppingListService.getIngredients();
        this.shoppingListService.ingredientsChanged
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((ingredients: Ingredients[]) =>{
            this.ingredients = ingredients;
        })
    }

    ngOnDestroy(){
       this.unsubscribe$.next();
       this.unsubscribe$.complete();
    }

    public onEditIngredient(index: number){
        this.shoppingListService.ingredientEdited.next(index);
    }
}