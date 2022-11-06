import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../../data/recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Ingredients } from 'src/app/shopping-list/data/ingredients.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  public editMode: boolean = false;
  public id: number;
  public recipe: Recipe;
  public formRecipe: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  get controls() {
    return (<FormArray>this.formRecipe.get('ingredients')).controls;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public onSubmit() {
    if(this.editMode){
      this.recipeService.updateRecipe(this.id, this.formRecipe.value);
    } else {
      this.recipeService.addRecipe(this.formRecipe.value);
    }
  }

  public addIngredient() {
    (<FormArray>this.formRecipe.get('ingredients')).push({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/),
      ]),
    });
  }

  public deleteIngredient() {}

  private initForm() {
    let recipeName: string = '';
    let imageURL: string = '';
    let descritpion: string = '';
    let ingredients = new FormArray([]);

    if (this.editMode) {
      const recipe: Recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.recipeName;
      imageURL = recipe.imagePath;
      descritpion = recipe.description;

      if (recipe['ingredients']) {
        for (const ingredient of recipe.ingredients) {
          ingredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
            })
          );
        }
      }
    }

    this.formRecipe = new FormGroup({
      recipeName: new FormControl(recipeName, Validators.required),
      description: new FormControl(descritpion, Validators.required),
      imagePath: new FormControl(imageURL, Validators.required),
      ingredients: ingredients,
    });
  }
}
