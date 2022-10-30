import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ShoppingList } from './header/shopping-list/component/shopping-list/shopping-list.component';
import { Header } from './header/component/header.component';
import { RecipeListComponent } from './header/recipes/component/recipe-list/recipe-list.component';
import { RecipeComponent } from './header/recipes/component/recipe/recipe.component';
import { RecipeDetailsComponent } from './header/recipes/component/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './header/recipes/component/recipe-item/recipe-item.component';
import { ShoppingListEditComponent } from './header/shopping-list/component/shopping-list-edit/shopping-list-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    ShoppingList,
    RecipeListComponent,
    RecipeComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    ShoppingListEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
