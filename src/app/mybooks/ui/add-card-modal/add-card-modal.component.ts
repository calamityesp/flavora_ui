import { Component, OnInit } from '@angular/core';
import { CdkPortal, PortalModule } from '@angular/cdk/portal';

@Component({
  selector: 'app-add-card-modal',
  imports: [PortalModule],
  templateUrl: './add-card-modal.component.html',
  styleUrl: './add-card-modal.component.css',
})
export class AddCardModalComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
