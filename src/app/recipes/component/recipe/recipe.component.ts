import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../data/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [RecipeService],
})
export class RecipeComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor() {}

  ngOnInit(): void {}
}
