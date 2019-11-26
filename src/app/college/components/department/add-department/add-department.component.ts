import {Component, Input, OnDestroy, OnInit} from '@angular/core';

import {Department} from '../../../model/Department';
import {DepartmentService} from '../../../services/department.service';
import {Subscription} from 'rxjs';
import {College} from '../../../model/College';
import {DepartmentError} from '../../../errors/DepartmentError';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit, OnDestroy {
  @Input('college') private college: College;
  private department: Department;
  private x: Subscription;

  private departmentError: DepartmentError;

  constructor(private departmentService: DepartmentService) {
    this.department = new Department();
    this.departmentError = new DepartmentError();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.x) {
      this.x.unsubscribe();
    }
  }

  addDepartment() {
    this.x = this.departmentService.addDepartment(this.college, this.department).subscribe(response => this.departmentError = response);
    this.department.departmentName = null;
  }

}
