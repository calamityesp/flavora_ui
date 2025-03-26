import { Component } from '@angular/core';
import { DashboardNavComponent } from './ui/dashboard-nav/dashboard-nav.component';
import { RecipeCardComponent } from '../../shared/ui/recipe-card/recipe-card.component';
import { DashboardTopNavComponent } from './ui/dashboard-top-nav/dashboard-top-nav.component';
import { AddNewRecipeCardComponent } from '../../shared/ui/add-new-recipe-card/add-new-recipe-card.component';

@Component({
  selector: 'app-dashboard-layout',
  imports: [
    DashboardNavComponent,
    RecipeCardComponent,
    DashboardTopNavComponent,
    AddNewRecipeCardComponent,
  ],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css',
})
export default class DashboardLayoutComponent {}
