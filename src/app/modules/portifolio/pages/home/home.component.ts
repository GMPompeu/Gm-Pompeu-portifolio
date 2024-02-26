import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { AboutmeComponent } from '../../components/aboutme/aboutme.component';
import { GmpompeuComponent } from '../../components/gmpompeu/gmpompeu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: 
  [
    HeaderComponent, 
    AboutmeComponent, 
    GmpompeuComponent,
    
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
