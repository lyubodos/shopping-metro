import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../data/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  recipeToBeViewed(recipe: Recipe){
    this.selectedRecipe = recipe;
    console.log(recipe);
    
  }

}
