import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {College} from '../../../model/College';

@Component({
  selector: 'app-root-department',
  templateUrl: './root-department.component.html',
  styleUrls: ['./root-department.component.css']
})
export class RootDepartmentComponent implements OnInit {
  private college: College;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any) {
  }

  ngOnInit() {
    this.college = this.data.college;
  }

}
