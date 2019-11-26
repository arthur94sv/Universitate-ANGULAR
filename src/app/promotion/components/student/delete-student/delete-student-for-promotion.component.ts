import {Component, Inject, Input, OnDestroy, OnInit} from '@angular/core';
import {StudentForPromotion} from '../../../model/StudentForPromotion';
import {Subscription} from 'rxjs';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Promotion} from '../../../model/Promotion';
import {StudentService} from '../../../../student/service/student.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student-for-promotion.component.html',
  styleUrls: ['./delete-student-for-promotion.component.css']
})
export class DeleteStudentForPromotionComponent implements OnInit, OnDestroy {
  @Input('student') private student: StudentForPromotion;
  private promotion: Promotion;
  private x: Subscription;

  constructor(private studentService: StudentService,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private dialogRef: MatDialogRef<DeleteStudentForPromotionComponent>) {
  }

  ngOnInit() {
    this.student = this.data.student;
    this.promotion = this.data.promotion;
  }

  ngOnDestroy() {
    if (this.x) {
      this.x.unsubscribe();
    }
  }

  deleteStudentButton() {
    this.x = this.studentService.deleteStudentFromPromotion(this.promotion, this.student).subscribe(() => this.closeDialog());
  }


  closeDialog() {
    this.dialogRef.close();
  }

}
