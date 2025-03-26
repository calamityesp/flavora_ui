import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AddNewRecipeCardComponent } from '../add-new-recipe-card/add-new-recipe-card.component';

@Component({
  selector: 'app-recipe-card',
  imports: [MatCardModule, AddNewRecipeCardComponent],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css',
})
export class RecipeCardComponent {}
