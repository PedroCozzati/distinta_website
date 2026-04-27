import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.html',
  standalone: true
})
export class MenuComponent {
  dataService = inject(DataService);
}
