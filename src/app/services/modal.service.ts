import { Injectable, signal } from '@angular/core';
import { Band } from '../models/data.models';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  readonly isBandModalOpen = signal(false);
  readonly isZoomModalOpen = signal(false);
  
  readonly selectedBand = signal<Band | null>(null);
  readonly zoomImageSrc = signal<string>('');

  openBandModal(band: Band) {
    this.selectedBand.set(band);
    this.isBandModalOpen.set(true);
  }

  openZoomModal(imageSrc: string) {
    this.zoomImageSrc.set(imageSrc);
    this.isZoomModalOpen.set(true);
  }

  closeModals() {
    this.isBandModalOpen.set(false);
    this.isZoomModalOpen.set(false);
    this.selectedBand.set(null);
    this.zoomImageSrc.set('');
  }
}
