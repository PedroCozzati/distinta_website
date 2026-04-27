import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { ScheduleComponent } from './components/schedule/schedule';
import { BandsComponent } from './components/bands/bands';
import { MenuComponent } from './components/menu/menu';
import { AboutComponent } from './components/about/about';
import { EntertainmentComponent } from './components/entertainment/entertainment';
import { FormsComponent } from './components/forms/forms';
import { FooterComponent } from './components/footer/footer';
import { ModalsComponent } from './components/modals/modals';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    ScheduleComponent,
    BandsComponent,
    MenuComponent,
    AboutComponent,
    EntertainmentComponent,
    FormsComponent,
    FooterComponent,
    ModalsComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'distinta_website';
}
