import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../../shopping-list/data/ingredients.model';
import { ShoppingListService } from '../../shopping-list/services/shopping-list.service';
import { Recipe } from '../data/recipe.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    {
      recipeName: 'Spaghetti Carbonara',
      description: 'Declicious italian meal with eggs and guancale.',
      imagePath:
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001491_11-2e0fa5c.jpg?quality=90&webp=true&resize=375,341',
      ingredients: [
        {
          name: 'Spaghetti',
          amount: 1,
        },
        {
          name: 'Eggs',
          amount: 5,
        },
        {
          name: 'Pecorino cheese',
          amount: 1,
        },
      ],
    },
    {
      recipeName: 'Wiener Schnietzel',
      description:
        'A delicious austrian meal including any choice of meat with crispy potatoes.',
      imagePath:
        'https://www.thespruceeats.com/thmb/UBmYuSTNMt2rKl4g7s1JGrhdHfc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wiener-schnitzel-recipe-1447089-Hero-5b587d6c46e0fb0071b0059d.jpg',
      ingredients: [
        {
          name: 'Potatoes',
          amount: 10,
        },
        {
          name: 'Pork',
          amount: 2,
        },
        {
          name: 'Butter',
          amount: 3,
        },
      ],
    },
  ];

  constructor(private slService: ShoppingListService) {}

  public recipeSelected = new EventEmitter<Recipe>();

  public getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  public addIngrToShoppingList(ingredients: Ingredients[]){
    this.slService.addIngredients(ingredients);
  }
}
