import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Promotion} from '../../../model/Promotion';
import {AddStudentToPromotion} from '../../../model/AddStudentToPromotion';
import {Repartition} from '../../../model/Repartition';
import {Subscription} from 'rxjs';
import {StudentService} from '../../../../student/service/student.service';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit, OnDestroy {
  private student: AddStudentToPromotion;
  @Input('promotion') private promotion: Promotion;

  private repartitionList: Repartition[] = [
    {id: 1, repartition: 'buget'},
    {id: 2, repartition: 'taxa'}
  ];

  private x: Subscription;

  private error: string;

  constructor(private studentService: StudentService) {
    this.student = new AddStudentToPromotion();

  }

  ngOnInit() {

  }

  ngOnDestroy() {
    if (this.x) {
      this.x.unsubscribe();
    }
  }

  addStudentToPromotion() {
    this.x = this.studentService.addStudent(this.promotion, this.student)
      .subscribe(() => console.log(), error => this.error = error.error.message);
    this.student = new AddStudentToPromotion();
  }
}
