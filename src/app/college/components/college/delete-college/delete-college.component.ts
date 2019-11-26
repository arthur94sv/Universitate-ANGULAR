import {Component, Inject, OnDestroy, OnInit} from '@angular/core';

import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Subscription} from 'rxjs';
import {College} from '../../../model/College';
import {CollegeService} from '../../../services/college.service';

@Component({
  selector: 'app-delete-college',
  templateUrl: './delete-college.component.html',
  styleUrls: ['./delete-college.component.css']
})
export class DeleteCollegeComponent implements OnInit, OnDestroy {
  private college: College;
  private x: Subscription;

  constructor(private collegeService: CollegeService,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private dialogRef: MatDialogRef<DeleteCollegeComponent>) {
  }

  ngOnInit() {
    this.college = this.data.college;
  }

  ngOnDestroy() {
    if (this.x) {
      this.x.unsubscribe();
    }

  }

  deleteCollegeDialogButton() {
    this.collegeService.deleteCollege(this.college).subscribe(() => this.closeDialog());
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
