import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DialogResumeComponent } from '../dialogs/dialog-resume/dialog-resume.component';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports:
  [
    MatDialogModule,
    DialogResumeComponent,

  ],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent {
  constructor(public dialog: MatDialog){}

  openDialog(){
    this.dialog.open(DialogResumeComponent)
  }

  closeDialog(){
    this.dialog.closeAll();
  }

}
