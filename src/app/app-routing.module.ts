import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RecipeDetailsComponent } from './recipes/component/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipes/component/recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipes/component/recipe-item/recipe-item.component';
import { RecipeStartComponent } from './recipes/component/recipe-start/recipe-start.component';
import { RecipeComponent } from './recipes/component/recipe/recipe.component';
import { ShoppingList } from './shopping-list/component/shopping-list/shopping-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipeComponent,
    children: [
        { path: '', component: RecipeStartComponent},
        { path: 'new', component: RecipeEditComponent},
        { path: ':id', component: RecipeDetailsComponent },
        { path: ':id/edit', component: RecipeEditComponent}

    ],
  },
  { path: 'shopping-list', component: ShoppingList },
  { path: 'recipes/:recipe', component: RecipeItemComponent },
  { path: 'signup', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
