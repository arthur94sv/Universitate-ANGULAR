import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {ProfessorService} from '../../../../professor/services/professor.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Subscription} from 'rxjs';
import {GetProfessorForCollege} from '../../../model/professor/GetProfessorForCollege';

@Component({
  selector: 'app-delete-professor',
  templateUrl: './delete-professor.component.html',
  styleUrls: ['./delete-professor.component.css']
})
export class DeleteProfessorComponent implements OnInit, OnDestroy {
  private professor: GetProfessorForCollege;
  private x: Subscription;

  constructor(private professorService: ProfessorService, @Inject(MAT_DIALOG_DATA) private data: any, private dialogRef: MatDialogRef<DeleteProfessorComponent>) {
  }

  ngOnInit() {
    this.professor = this.data.professor;
  }

  ngOnDestroy() {
    if (this.x) {
      this.x.unsubscribe();
    }
  }

  deleteProfessorButton() {
    this.x = this.professorService.deleteProfessor(this.professor).subscribe(() => this.close());
  }

  close() {
    this.dialogRef.close();
  }

}
