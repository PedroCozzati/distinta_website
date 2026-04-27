import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.html',
  standalone: true
})
export class ScheduleComponent {
  dataService = inject(DataService);
  modalService = inject(ModalService);
}
