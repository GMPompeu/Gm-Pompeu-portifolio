import { Component, signal } from '@angular/core';
import { skillIcons } from '../../interface/skill.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {

  public skill = signal<skillIcons[]>([
    {
      content: {
        iconSkill: 'devicon-angular-plain',
        iname: 'Angular',
      },
    },
    {
      content: {
        iconSkill: 'devicon-spring-original',
        iname: 'Spring',
      },
    },
    {
      content: {
        iconSkill: 'devicon-java-plain',
        iname: 'Java',
      },
    },
    {
      content: {
        iconSkill: 'devicon-typescript-plain',
        iname: 'Type Script',
      },
    },
    {
      content: {
        iconSkill: 'devicon-sass-original',
        iname: '',
      },
    },
    {
      content: {
        iconSkill: 'devicon-azuresqldatabase-plain',
        iname: '',
      },
    },
    {
      content: {
        iconSkill: 'devicon-php-plain',
        iname: '',
      },
    },
    {
      content: {
        iconSkill: 'devicon-git-plain',
        iname: 'Git',
      },
    },
    {
      content: {
        iconSkill: 'devicon-github-original',
        iname: 'GitHub',
      },
    },
  ]);
}


