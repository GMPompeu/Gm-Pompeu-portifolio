import { Component, EventEmitter, Output } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { AboutmeComponent } from '../../components/aboutme/aboutme.component';
import { GmpompeuComponent } from '../../components/gmpompeu/gmpompeu.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import Swiper from 'swiper';
import { SkillsComponent } from '../../components/skills/skills.component';
import { ContactsComponent } from '../../components/contacts/contacts.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports:
  [
    HeaderComponent,
    AboutmeComponent,
    GmpompeuComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactsComponent

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
