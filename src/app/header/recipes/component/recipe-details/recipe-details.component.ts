import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingListService } from 'src/app/header/shopping-list/services/shopping-list.service';
import { Recipe } from '../../data/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipe: Recipe;

  id: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  public sendRecipeIngredientsToShoppingList() {
    this.recipeService.addIngrToShoppingList(this.recipe.ingredients);
  }
}
