import {Component, Input, OnDestroy, OnInit} from '@angular/core';

import {Department} from '../../../model/Department';
import {DepartmentService} from '../../../services/department.service';
import {Subscription} from 'rxjs';
import {College} from '../../../model/College';


@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit, OnDestroy {
  @Input('college') private college: College;
  private department: Department;
  private x: Subscription;


  constructor(private departmentService: DepartmentService) {
    this.department = new Department();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.x) {
      this.x.unsubscribe();
    }
  }

  addDepartment() {
    this.x = this.departmentService.addDepartment(this.college, this.department).subscribe();
  }

}
