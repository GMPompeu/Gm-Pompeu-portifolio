import { Component, EventEmitter, Output } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { AboutmeComponent } from '../../components/aboutme/aboutme.component';
import { GmpompeuComponent } from '../../components/gmpompeu/gmpompeu.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import Swiper from 'swiper';



@Component({
  selector: 'app-home',
  standalone: true,
  imports:
  [
    HeaderComponent,
    AboutmeComponent,
    GmpompeuComponent,
    ProjectsComponent

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
