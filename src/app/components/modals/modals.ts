import { Component, inject } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.html',
  standalone: true,
  imports: [CommonModule]
})
export class ModalsComponent {
  modalService = inject(ModalService);
}
