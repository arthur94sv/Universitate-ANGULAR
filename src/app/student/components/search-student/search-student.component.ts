import {Component, OnDestroy, OnInit} from '@angular/core';
import {StudentService} from '../../service/student.service';
import {Student} from '../../model/Student';
import {Subscription} from 'rxjs';
import {MatDialog} from '@angular/material';
import {DeleteStudentComponent} from '../delete-student/delete-student.component';
import {UpdateStudentComponent} from '../update-student/update-student.component';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent implements OnInit, OnDestroy {
  private nume: string;
  private prenume: string;
  private x: Subscription;

  private listOfStudents: Student[];
  private displayListOfStudents = false;

  constructor(private studentService: StudentService, private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.x) {
      this.x.unsubscribe();
    }
  }

  searchStudents() {
    this.x = this.studentService.searchStudent(this.nume, this.prenume).subscribe(response => this.listOfStudents = response);
    this.displayListOfStudents = true;
    this.nume = null;
    this.prenume = null;
  }

  close() {
    this.displayListOfStudents = false;
  }

  openDeleteStudentDialog(student: Student) {
    this.dialog.open(DeleteStudentComponent,
      {data: {student: student}});
  }

  openUpdateStudentDialog(student: Student) {
    this.dialog.open(UpdateStudentComponent,
      {data: {student: student}});
  }
}
