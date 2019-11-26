import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Promotion} from '../../../model/Promotion';
import {StudentForPromotion} from '../../../model/StudentForPromotion';
import {MatDialog} from '@angular/material';
import {DeleteStudentForPromotionComponent} from '../delete-student/delete-student-for-promotion.component';
import {StudentService} from '../../../../student/service/student.service';

@Component({
  selector: 'app-get-all-students-for-promotion',
  templateUrl: './get-all-students-for-promotion.component.html',
  styleUrls: ['./get-all-students-for-promotion.component.css']
})
export class GetAllStudentsForPromotionComponent implements OnInit, OnDestroy {
  @Input('promotion') private promotion: Promotion;
  private displayAllStudents = false;
  private listOfStudents: StudentForPromotion[];
  private x: Subscription;

  constructor(private studentService: StudentService, private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.x) {
      this.x.unsubscribe();
    }
  }

  getStudents() {
    this.x = this.studentService.getStudentsForPromotion(this.promotion).subscribe(response => this.listOfStudents = response);
    this.displayAllStudents = true;
  }

  openDeleteDialogStudent(student: StudentForPromotion) {
    this.dialog.open(DeleteStudentForPromotionComponent,
      {
        data:
          {student: student, promotion: this.promotion}
      });
  }
}
