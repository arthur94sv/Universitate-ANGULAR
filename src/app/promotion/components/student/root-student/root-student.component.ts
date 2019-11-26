import {Component, Inject, OnInit} from '@angular/core';
import {Promotion} from '../../../model/Promotion';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-root-student',
  templateUrl: './root-student.component.html',
  styleUrls: ['./root-student.component.css']
})
export class RootStudentComponent implements OnInit {
  private promotion: Promotion;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.promotion = this.data.promotion;
  }

}
