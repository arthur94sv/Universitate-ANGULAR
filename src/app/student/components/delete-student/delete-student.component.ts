import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {CollegeService} from '../../../college/services/college.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {StudentService} from '../../service/student.service';
import {Student} from '../../model/Student';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit, OnDestroy {
  private student: Student;
  private x: Subscription;

  constructor(private studentService: StudentService,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private dialogRef: MatDialogRef<DeleteStudentComponent>) {
  }

  ngOnInit() {
    this.student = this.data.student;
  }

  ngOnDestroy() {
    if (this.x) {
      this.x.unsubscribe();
    }
  }

  deleteStudentButton() {
    this.x = this.studentService.deleteStudent(this.student).subscribe(() => this.closeDialog());
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
