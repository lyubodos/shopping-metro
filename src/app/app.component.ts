import { Component, EventEmitter, Output } from '@angular/core';
import { RecipeService } from './recipes/services/recipe.service';
import { ShoppingListService } from './shopping-list/services/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppingListService, RecipeService]
})
export class AppComponent {
  loadedFeature: string = 'recipe';
}
