import { Component,EventEmitter,Output } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RenduDirective } from '../../shared/rendu.directive';
import { NonRenduDirective } from '../../shared/non-rendu.directive';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatListModule } from "@angular/material/list";
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-add-assignment',
  standalone: true,
  imports: [CommonModule, RenduDirective, NonRenduDirective,
    FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule,
    MatListModule,
    MatDatepickerModule, MatNativeDateModule],
  templateUrl: './add-assignment.component.html',
  styleUrl: './add-assignment.component.css'
})
export class AddAssignmentComponent {
  @Output() nouvelAssignment = new EventEmitter<Assignment>();
  nomDevoir = "";
  dateDeRendu!:Date;
  onSubmit() {

    const newAssignment = new Assignment();
    newAssignment.nom=this.nomDevoir;
    newAssignment.dateDeRendu=new Date(this.dateDeRendu);
    newAssignment.rendu=false;
    this.nouvelAssignment.emit(newAssignment);
  }
}
