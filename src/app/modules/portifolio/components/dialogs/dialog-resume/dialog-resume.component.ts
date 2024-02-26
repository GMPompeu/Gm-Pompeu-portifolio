import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-resume',
  standalone: true,
  imports: 
  [
    MatDialogModule
  ],
  templateUrl: './dialog-resume.component.html',
  styleUrl: './dialog-resume.component.scss'
})
export class DialogResumeComponent {

}
