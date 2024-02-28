import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/experiences.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  public arrayProjects = signal<IExperiences[]>([
    {
      preview: {
        image: 'assets/img/imgP/RFC-P.jpeg',
        title: 'Relatório Fiscalização',
        technologiesIcon: {
          icons: [
            'devicon-php-plain',
            'devicon-html5-plain',
            'devicon-css3-plain',
            'devicon-mysql-original',
            'devicon-javascript-plain',
          ],
          iname:[
            'PHP',
            'HTMl',
            'CSS',
            'MySql',
            'JavaScript'
          ]
        },
        resume:
          'sistema que controla todas as vistorias feitas em Postos SPTrans, facilitando o acesso, cadastro, e visualização dos dados O sistema em si consiste em um formulario, onde ao final após todas suas validações serem concluidas, gera um documento com todas as informações obtidas daquele formulario',
        linkRepositorio: '',
        linkDploy: '',
      },
    },
    
  ]);
}
