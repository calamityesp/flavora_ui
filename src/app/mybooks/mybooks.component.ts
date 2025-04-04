import { Component } from '@angular/core';
import { RecipeCardComponent } from './ui/recipe-card/recipe-card.component';
import { AddNewRecipeCardComponent } from './ui/add-new-recipe-card/add-new-recipe-card.component';

@Component({
  selector: 'app-mybooks',
  imports: [RecipeCardComponent, AddNewRecipeCardComponent],
  templateUrl: './mybooks.component.html',
  styleUrl: './mybooks.component.css',
})
export default class MybooksComponent {}
