import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {GetCurs} from '../../../model/GetCurs';
import {Subscription} from 'rxjs';
import {CoursService} from '../../../services/cours.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit, OnDestroy {
  private course: GetCurs;
  private x: Subscription;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private courseService: CoursService,
              public dialogRef: MatDialogRef<UpdateCourseComponent>) {
  }

  ngOnInit() {
    this.course = this.data.course;
  }

  ngOnDestroy() {
    if (this.x) {
      this.x.unsubscribe();
    }
  }

  updateCurs() {
    this.x = this.courseService.updateCurse(this.course).subscribe(() => this.dialogRef.close());
  }

}
