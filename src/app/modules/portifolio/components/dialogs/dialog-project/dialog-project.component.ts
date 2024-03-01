import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IExperiences } from '../../../interface/experiences.interface';

@Component({
  selector: 'app-dialog-project',
  standalone: true,
  imports: [],
  templateUrl: './dialog-project.component.html',
  styleUrl: './dialog-project.component.scss'
})
export class DialogProjectComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data : IExperiences){}
}
