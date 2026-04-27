import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  standalone: true
})
export class AboutComponent {
  dataService = inject(DataService);
  modalService = inject(ModalService);
}
