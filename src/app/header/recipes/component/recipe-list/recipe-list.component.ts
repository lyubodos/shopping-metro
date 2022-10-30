import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../../data/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    {
      recipeName: "Spaghetti Carbonara",
      description: "Declicious italian meal with eggs and guancale.",
      imagePath: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001491_11-2e0fa5c.jpg?quality=90&webp=true&resize=375,341"
    },
    {
      recipeName: "Wiener Schnietzel",
      description: "A delicious austrian meal including any choice of meat with crispy potatoes.",
      imagePath: "https://www.thespruceeats.com/thmb/UBmYuSTNMt2rKl4g7s1JGrhdHfc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wiener-schnitzel-recipe-1447089-Hero-5b587d6c46e0fb0071b0059d.jpg"
    }
  ]

  constructor() { }
  
  @Output() selectedRecipe=  new EventEmitter<Recipe>();

  ngOnInit(): void {
  }

  onSelectedRecipe(chosenRecipe: Recipe){    
    return this.selectedRecipe.emit(chosenRecipe);
  }

}
