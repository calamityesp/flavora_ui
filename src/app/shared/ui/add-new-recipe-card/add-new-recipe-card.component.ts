import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-add-new-recipe-card',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './add-new-recipe-card.component.html',
  styleUrl: './add-new-recipe-card.component.css',
})
export class AddNewRecipeCardComponent {}
