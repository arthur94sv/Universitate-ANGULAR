import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {GetProfessor} from '../../../model/GetProfessor';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ProfessorService} from '../../../services/professor.service';
import {Grad} from '../../../../college/model/Grad';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-update-professor',
  templateUrl: './update-professor.component.html',
  styleUrls: ['./update-professor.component.css']
})
export class UpdateProfessorComponent implements OnInit, OnDestroy {
  private professor: GetProfessor;

  private listOfGrads: Grad[] = [
    {id: 1, grad: 'asistent universitar'},
    {id: 2, grad: 'lector universitar'},
    {id: 3, grad: 'conferentiar universitar'},
    {id: 4, grad: 'profesor universitar'}
  ];

  private x: Subscription;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private professorService: ProfessorService,
              private dialogRef: MatDialogRef<UpdateProfessorComponent>) {
    this.professor = new GetProfessor();
  }

  ngOnInit() {
    this.professor.id = this.data.professor.id;
    this.professor.nume = this.data.professor.nume;
    this.professor.prenume = this.data.professor.prenume;
    this.professor.email = this.data.professor.email;
  }

  ngOnDestroy() {
    if (this.x) {
      this.x.unsubscribe();
    }
  }


  updateProfessor() {
    this.x = this.professorService.updateProfessor(this.professor).subscribe(() => this.dialogRef.close());
  }
}
