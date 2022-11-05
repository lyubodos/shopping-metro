import { Component, OnInit, Output } from "@angular/core";
import { DataStorageService } from "src/app/shared/data-storage.service";
import { RecipeService } from "../recipes/services/recipe.service";

@Component({
    selector: "app-header",
    templateUrl:  "./header.component.html",
    styleUrls: ["header.component.css"]
})
export class Header {

    constructor(private dataStorageService: DataStorageService) {}

    public saveRecipes(): void {
        this.dataStorageService.storeRecipes();
    }

    public fetchRecipes() {
        this.dataStorageService.fetchRecipes();
    }
}