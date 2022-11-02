import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredients } from '../../data/ingredients.model';
import { ShoppingListService } from '../../services/shopping-list.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') formEdit: NgForm;

  private unsubscribe$ = new Subject<void>();

  public editMode: boolean;
  public indexOfEditedItem: number;
  public editedIngredient: Ingredients;

  constructor(private shoppingListServie: ShoppingListService) {}

  ngOnInit(): void {
    this.shoppingListServie.ingredientEdited
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((index: number) => {
        this.editMode = true;
        this.indexOfEditedItem = index;
        this.editedIngredient = this.shoppingListServie.getIngredient(index);

        this.formEdit.setValue({name: this.editedIngredient.name, amount: this.editedIngredient.amount});
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public onSubmit(form: NgForm) {

    if(this.editMode){
      let updatedName = this.formEdit.value.name;
      let updatedAmount = this.formEdit.value.amount;
      let updatedItem = {name: updatedName, amount: updatedAmount};

      this.shoppingListServie.updateIngredient(updatedItem, this.indexOfEditedItem)

    } else {
      const name = form.value.name;
      const amount = form.value.amount;
      const ingredientToBePushed = { name, amount };
      this.shoppingListServie.addIngredient(ingredientToBePushed);
    }
  
    form.reset();
  }

  public onDelete() {}
}
