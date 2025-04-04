import { Routes } from '@angular/router';
import { LandingLayoutComponent } from './pages/landing-layout/landing-layout.component';

export const routes: Routes = [
  {
    path: 'landing',
    component: LandingLayoutComponent,
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: 'test',
    loadComponent: () => import('./test/testing/testing.component'),
  },
  {
    path: 'portal',
    loadComponent: () =>
      import('./pages/dashboard-layout/dashboard-layout.component'),
    children: [
      {
        path: '',
        redirectTo: 'Mybooks',
        pathMatch: 'full',
      },
      {
        path: 'Mybooks',
        loadComponent: () => import('./mybooks/mybooks.component'),
      },
      {
        path: 'Recent',
        loadComponent: () => import('./recent/recent.component'),
      },
      {
        path: 'Favorite',
        loadComponent: () => import('./favorite/favorite.component'),
      },
    ],
  },
];
