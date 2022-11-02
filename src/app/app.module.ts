import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ShoppingList } from './header/shopping-list/component/shopping-list/shopping-list.component';
import { Header } from './header/component/header.component';
import { RecipeListComponent } from './header/recipes/component/recipe-list/recipe-list.component';
import { RecipeComponent } from './header/recipes/component/recipe/recipe.component';
import { RecipeDetailsComponent } from './header/recipes/component/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './header/recipes/component/recipe-item/recipe-item.component';
import { ShoppingListEditComponent } from './header/shopping-list/component/shopping-list-edit/shopping-list-edit.component';
import { DropDownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './header/shopping-list/services/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './header/recipes/component/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './header/recipes/component/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    ShoppingList,
    RecipeListComponent,
    RecipeComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    ShoppingListEditComponent,
    DropDownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
