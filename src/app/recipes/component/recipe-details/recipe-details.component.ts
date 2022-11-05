import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route: ActivatedRoute,
    private router: Router
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

  public navigateToEditRecipe() {
    this.router.navigate(['edit'], {
      relativeTo: this.route
    })
  }
}
