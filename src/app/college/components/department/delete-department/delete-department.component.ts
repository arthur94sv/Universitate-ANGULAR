import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Department} from '../../../model/Department';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DepartmentService} from '../../../services/department.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-delete-department',
  templateUrl: './delete-department.component.html',
  styleUrls: ['./delete-department.component.css']
})
export class DeleteDepartmentComponent implements OnInit, OnDestroy {
  private department: Department;
  private x: Subscription;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
              private departmentService: DepartmentService,
              private dialogRef: MatDialogRef<DeleteDepartmentComponent>) {
  }

  ngOnInit() {
    this.department = this.data.department;
  }

  ngOnDestroy() {
    if (this.x) {
      this.x.unsubscribe();
    }
  }

  deleteDepartmentDialog() {
    this.x = this.departmentService.deleteDepartment(this.department).subscribe(() => this.closeDialog());
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
