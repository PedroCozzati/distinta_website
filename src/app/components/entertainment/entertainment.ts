import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.html',
  standalone: true
})
export class EntertainmentComponent {
  dataService = inject(DataService);
}
