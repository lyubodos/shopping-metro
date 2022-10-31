import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredients } from '../../data/ingredients.model';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingListServie: ShoppingListService) { }

  ngOnInit(): void {
  }

  public addIngredient(){
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    const ingredientToBePushed = {name, amount};
    this.shoppingListServie.addIngredient(ingredientToBePushed);
    this.nameInputRef.nativeElement.value = "";
    this.amountInputRef.nativeElement.value = null;
  }

}