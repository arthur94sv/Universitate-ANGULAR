import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Department} from '../../../model/Department';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DepartmentService} from '../../../services/department.service';
import {Subscription} from 'rxjs';
import {College} from '../../../model/College';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css']
})
export class UpdateDepartmentComponent implements OnInit, OnDestroy {
  private college: College;
  private department: Department;
  private x: Subscription;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
              private departmentService: DepartmentService,
              private dialogRef: MatDialogRef<UpdateDepartmentComponent>) {
    this.department = new Department();
  }

  ngOnInit() {
    this.college = this.data.college;
    this.department.id = this.data.department.id;
    this.department.departmentName = this.data.department.departmentName;
  }

  ngOnDestroy() {
    if (this.x) {
      this.x.unsubscribe();
    }
  }

  updateDepartmentButton() {
    this.departmentService.updateDepartment(this.department).subscribe(() => this.dialogRef.close());
  }

}
