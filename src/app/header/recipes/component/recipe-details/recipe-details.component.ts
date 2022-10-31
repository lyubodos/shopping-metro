import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from 'src/app/header/shopping-list/services/shopping-list.service';
import { Recipe } from '../../data/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
  }

  public sendRecipeIngredientsToShoppingList(){
    this.recipeService.addIngrToShoppingList(this.recipe.ingredients);
  }
}
