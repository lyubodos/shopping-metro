import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredients } from '../../data/ingredients.model';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('f') formEdit: NgForm;

  constructor(private shoppingListServie: ShoppingListService) { }

  ngOnInit(): void {
  }

  public onSubmit(form: NgForm) {
    const name = form.value.name;
    const amount = form.value.amount;;
    const ingredientToBePushed = {name, amount};
    this.shoppingListServie.addIngredient(ingredientToBePushed);
    form.reset();
  }

}