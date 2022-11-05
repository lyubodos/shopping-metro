import { Ingredients } from "../../shopping-list/data/ingredients.model";

export interface Recipe {
    recipeName: string;
    description: string;
    imagePath: string;
    ingredients: Ingredients[];
}