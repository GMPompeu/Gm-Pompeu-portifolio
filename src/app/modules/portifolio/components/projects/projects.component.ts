import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/experiences.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  public arrayProjects = signal<IExperiences[]>([
    {
      preview: {
        image: '',
        title: '',
        technologiesIcon: {
          icons: '',
        },
        resume: '',
        linkRepositorio: '',
        linkDploy: '',
      },
    },
  ]);
}
