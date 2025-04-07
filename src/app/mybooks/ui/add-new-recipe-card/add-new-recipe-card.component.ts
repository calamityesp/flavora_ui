import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ModalCenterComponent } from '../../../shared/ui/modal-center/modal-center.component';

@Component({
  selector: 'app-add-new-recipe-card',
  imports: [MatCardModule, MatIconModule, ModalCenterComponent],
  templateUrl: './add-new-recipe-card.component.html',
  styleUrl: './add-new-recipe-card.component.css',
})
export class AddNewRecipeCardComponent {
  modalOpened = false;
  openModal(): void {
    this.modalOpened = true;
  }

  closeModal(): void {
    this.modalOpened = false;
  }
}
