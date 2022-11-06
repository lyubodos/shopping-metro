import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
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
  public formRercipe: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  get controls() {
    return (<FormArray>this.formRercipe.get('ingredients')).controls;
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

  public onSubmit(){

  }

  public addIngredient(){
    (<FormArray>this.formRercipe.get('ingredients')).push({
      'name': new FormControl(),
      'amount': new FormControl()
    });
  }


  private initForm() {
    let recipeName: string = '';
    let imageURL: string = '';
    let descritpion: string = '';
    let ingredients =  new FormArray([]); 


    if(this.editMode){
      const recipe: Recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.recipeName;
      imageURL = recipe.imagePath;
      descritpion = recipe.description;
       
      if(recipe['ingredients']){
        for (const ingredient of recipe.ingredients) {
          ingredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name),
              'amount': new FormControl(ingredient.amount)
            })
          )
        }
      }
    }
  
    this.formRercipe = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(imageURL),
      'description': new FormControl(descritpion),
      'ingredients': ingredients
    });
  }
}
