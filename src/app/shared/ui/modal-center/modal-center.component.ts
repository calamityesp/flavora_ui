import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import {
  Component,
  EventEmitter,
  inject,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-modal-center',
  imports: [PortalModule],
  templateUrl: './modal-center.component.html',
  styleUrl: './modal-center.component.css',
})
export class ModalCenterComponent implements OnInit, OnDestroy {
  @ViewChild(CdkPortal) portal: CdkPortal | undefined;
  @Output() closeModal = new EventEmitter<void>();

  overlay = inject(Overlay);
  overlayConfig = new OverlayConfig({
    hasBackdrop: true,
    positionStrategy: this.overlay
      .position()
      .global()
      .centerVertically()
      .centerHorizontally(),
    minWidth: 500,
  });

  overlayRef = this.overlay.create(this.overlayConfig);
  ngOnInit(): void {
    this.overlayRef.backdropClick().subscribe(() => {
      this.closeModal.emit();
    });
  }

  ngAfterViewInit(): void {
    this.overlayRef?.attach(this.portal);
  }

  ngOnDestroy(): void {
    this.overlayRef?.detach();
    this.overlayRef.dispose();
  }
}
