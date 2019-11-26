import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CoursService} from '../../../services/cours.service';
import {GetCurs} from '../../../model/GetCurs';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-delete-course',
  templateUrl: './delete-course.component.html',
  styleUrls: ['./delete-course.component.css']
})
export class DeleteCourseComponent implements OnInit, OnDestroy {
  private course: GetCurs;
  private x: Subscription;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private courseService: CoursService,
              public dialogRef: MatDialogRef<DeleteCourseComponent>) {
  }

  ngOnInit() {
    this.course = this.data.course;
  }

  ngOnDestroy() {
    if (this.x) {
      this.x.unsubscribe();
    }
  }

  deleteCourse() {
    this.x = this.courseService.deleteCurse(this.course).subscribe(() => this.close());
  }

  close() {
    this.dialogRef.close();
  }

}
