import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {GetProfessor} from '../../../model/GetProfessor';
import {PostPutCurs} from '../../../model/PostPutCurs';
import {Subscription} from 'rxjs';
import {GetCurs} from '../../../model/GetCurs';
import {CoursService} from '../../../services/cours.service';
import {MatDialog} from '@angular/material';
import {UpdateCourseComponent} from '../update-course/update-course.component';
import {DeleteCourseComponent} from '../delete-course/delete-course.component';

@Component({
  selector: 'app-get-all-courses-for-professor',
  templateUrl: './get-all-courses-for-professor.component.html',
  styleUrls: ['./get-all-courses-for-professor.component.css']
})
export class GetAllCoursesForProfessorComponent implements OnInit, OnDestroy {
  @Input('professor') private professor: GetProfessor;
  private listOfCourses: GetCurs[];
  private displayListOfCourses = false;
  private x: Subscription;

  constructor(private cursService: CoursService, private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.x) {
      this.x.unsubscribe();
    }
  }

  getCourses() {
    this.x = this.cursService.getCoursesForProfessor(this.professor).subscribe(response => this.listOfCourses = response);
    this.displayListOfCourses = true;
  }

  close() {
    this.displayListOfCourses = false;
  }

  openUpdateCourseDialog(course: GetCurs) {
    this.dialog.open(UpdateCourseComponent,
      {data: {course: course}});
  }

  openDeleteCourseDialog(course: GetCurs) {
    this.dialog.open(DeleteCourseComponent,
      {data: {course: course}});
  }
}
