import { Component } from '@angular/core';
import { LandingNavComponent } from './ui/landing-nav/landing-nav.component';
import { LandingBodyComponent } from './landing-body/landing-body.component';

@Component({
  selector: 'app-landing-layout',
  imports: [LandingNavComponent, LandingBodyComponent],
  templateUrl: './landing-layout.component.html',
  styleUrl: './landing-layout.component.css',
})
export class LandingLayoutComponent {}
