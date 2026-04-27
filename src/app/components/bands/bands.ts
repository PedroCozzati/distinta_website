import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-bands',
  templateUrl: './bands.html',
  standalone: true
})
export class BandsComponent {
  dataService = inject(DataService);
  modalService = inject(ModalService);
}
