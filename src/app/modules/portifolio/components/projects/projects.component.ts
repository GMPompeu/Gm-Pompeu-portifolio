import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal([
    {
     preview:{
      image: '',
      linkRepositorio: '',
      linkDploy: ''
     },
     resume: '',
     technologiesIcon:{
      icons: ''
     }
    }

  ])
}
