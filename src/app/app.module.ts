import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { Header } from './header/component/header.component';

import { AppComponent } from './app.component';
import { ShoppingList } from './shopping-list/component/shopping-list/shopping-list.component';

import { RecipeListComponent } from './recipes/component/recipe-list/recipe-list.component';
import { RecipeComponent } from './recipes/component/recipe/recipe.component';
import { RecipeDetailsComponent } from './recipes/component/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipes/component/recipe-item/recipe-item.component';
import { ShoppingListEditComponent } from './shopping-list/component/shopping-list-edit/shopping-list-edit.component';
import { DropDownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/services/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipes/component/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/component/recipe-edit/recipe-edit.component';
import { RecipeService } from './recipes/services/recipe.service';
import { AuthComponent } from './auth/auth.component';
import { LoadinSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    AuthComponent,
    ShoppingList,
    RecipeListComponent,
    RecipeComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    ShoppingListEditComponent,
    DropDownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    LoadinSpinnerComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
