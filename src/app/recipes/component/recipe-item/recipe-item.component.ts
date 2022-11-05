import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../data/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() public recipe: Recipe;
  @Input() public index: number;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}
}
