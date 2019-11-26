import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Department} from '../../../model/Department';
import {DepartmentService} from '../../../services/department.service';
import {MatDialog} from '@angular/material';
import {UpdateDepartmentComponent} from '../update-department/update-department.component';
import {DeleteDepartmentComponent} from '../delete-department/delete-department.component';
import {Subscription} from 'rxjs';
import {College} from '../../../model/College';

@Component({
  selector: 'app-get-all-departments',
  templateUrl: './get-all-departments.component.html',
  styleUrls: ['./get-all-departments.component.css']
})
export class GetAllDepartmentsComponent implements OnInit, OnDestroy {
  @Input('college') private college: College;
  private listOfDepartments: Department[];
  private displayListOfDepartments = false;
  private x: Subscription;

  constructor(private departmentService: DepartmentService, private dialog: MatDialog) {
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    if (this.x) {
      this.x.unsubscribe();
    }
  }

  getAllDepartments() {
    this.x = this.departmentService.getAllDepartments(this.college)
      .subscribe(response => this.listOfDepartments = response);
    this.displayListOfDepartments = true;
  }

  closeDisplayListOfDepartments() {
    this.displayListOfDepartments = false;
  }

  openUpdateDepartmentDialog(department: Department) {
    this.dialog.open(UpdateDepartmentComponent, {data: {department: department, college: this.college}});
  }

  openDeleteDepartmentDialog(department: Department) {
    this.dialog.open(DeleteDepartmentComponent, {data: {department: department}});
  }

}
