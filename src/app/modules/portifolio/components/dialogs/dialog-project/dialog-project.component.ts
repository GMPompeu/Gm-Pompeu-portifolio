import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { IExperiences } from '../../../interface/experiences.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog-project',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './dialog-project.component.html',
  styleUrl: './dialog-project.component.scss'
})
export class DialogProjectComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data : IExperiences){}
}
