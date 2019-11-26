import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {StudentService} from '../../service/student.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Student} from '../../model/Student';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit, OnDestroy {
  private student: Student;
  private x: Subscription;

  constructor(private studentService: StudentService,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private dialogRef: MatDialogRef<UpdateStudentComponent>) {
    this.student = new Student();
  }

  ngOnInit() {
    this.student.id = this.data.student.id;
    this.student.nume = this.data.student.nume;
    this.student.prenume = this.data.student.prenume;
    this.student.email = this.data.student.email;
  }

  ngOnDestroy() {
    if (this.x) {
      this.x.unsubscribe();
    }
  }

  updateStudentButton() {
    this.x = this.studentService.updateStudent(this.student).subscribe(() => this.dialogRef.close());
  }
}
