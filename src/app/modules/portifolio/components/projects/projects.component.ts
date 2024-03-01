import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { IExperiences } from '../../interface/experiences.interface';
import { NgFor } from '@angular/common';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { MatDialog } from '@angular/material/dialog';
import { DialogProjectComponent } from '../dialogs/dialog-project/dialog-project.component';
import { signal } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements AfterViewInit {
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  constructor(public dialog: MatDialog) {}

  public viewProject(resume: IExperiences) {
    console.log(resume)
    this.dialog.open(DialogProjectComponent,{
      data: resume
    })
  }

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
          iname: ['PHP', 'HTMl', 'CSS', 'MySql', 'JavaScript'],
        },
        resume:
          'Sistema que controla todas as vistorias feitas em Postos SPTrans, facilitando o acesso, cadastro, e visualização dos dados O sistema em si consiste em um formulario, onde ao final após todas suas validações serem concluidas, gera um documento com todas as informações obtidas daquele formulario',
        linkRepositorio: 'https://github.com/GMPompeu/RFC-Fiscalizacao-SPTrans',
        linkDploy: '',
      },
    },
    {
      preview: {
        image: 'assets/img/imgP/Patrimonio.jfif',
        title: 'Monitoramento de Patrimonio',
        technologiesIcon: {
          icons: [
            'devicon-php-plain',
            'devicon-html5-plain',
            'devicon-css3-plain',
            'devicon-bootstrap-plain',
            'devicon-mysql-original',
            'devicon-javascript-plain',
          ],
          iname: ['PHP', 'HTMl', 'CSS', 'Bootstrap', 'MySql', 'JavaScript'],
        },
        resume:
          'Juntamente com o meu grupo em um trabalho da faculdade, onde o desafio era criar soluções a fim de minimizar problemas que temos em nossa rotina. Wm grupo decidimos um sistema que fosse capaz de armazenar todos os patrimonios de uma empresa equipamentos que a mesma tem posse, capaz de monitorar e mostrar todos os seus equipamentos, pessoas vinculadas ao equipamento e sua localidade temabém. Entre outras opções como funções de administrador',
        linkRepositorio: '',
        linkDploy: '',
      },
    },
    {
      preview: {
        image: 'assets/img/imgP/WebScraping.jpeg',
        title: 'Dash Board AGQ',
        technologiesIcon: {
          icons: [
            'devicon-python-plain',
            'devicon-selenium-original',
            'devicon-pandas-plain',
          ],
          iname: ['Python', 'Selenium', 'Pandas'],
        },
        resume:
          'Automatizando meus relatórios com Web Scraping no Jira, armazenando dados de todos os chamados criados. Após receber esses dados e crio um dashboard no PowerBI para análise e tomada de decisões com base nas informações apresentadas',
        linkRepositorio: '',
        linkDploy: '',
      },
    },
  ]);

  ngAfterViewInit(): void {
    new Swiper(this.swiperContainer.nativeElement, {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 10,
      loop: true,
      loopAddBlankSlides: true,
    });
  }
}
