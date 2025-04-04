import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-nav',
  imports: [RouterModule],
  templateUrl: './dashboard-nav.component.html',
  styleUrl: './dashboard-nav.component.css',
})
export class DashboardNavComponent {
  cards = [
    {
      routeLink: 'Mybooks',
      icon: 'fa-solid fa-database',
      label: 'MyBooks',
    },
    {
      routeLink: 'Recent',
      icon: 'fa-solid fa-clock',
      label: 'Recent',
    },
    {
      routeLink: 'Favorite',
      icon: 'fa-solid fa-star',
      label: 'Favorite',
    },
  ];
}
