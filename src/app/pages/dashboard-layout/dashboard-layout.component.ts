import { Component } from '@angular/core';
import { DashboardNavComponent } from './ui/dashboard-nav/dashboard-nav.component';
import { DashboardTopNavComponent } from './ui/dashboard-top-nav/dashboard-top-nav.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  imports: [DashboardNavComponent, DashboardTopNavComponent, RouterModule],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css',
})
export default class DashboardLayoutComponent {}
