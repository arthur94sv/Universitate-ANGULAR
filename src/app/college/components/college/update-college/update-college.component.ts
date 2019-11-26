import {Component, Inject, OnDestroy, OnInit} from '@angular/core';

import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Subscription} from 'rxjs';
import {College} from '../../../model/College';
import {CollegeService} from '../../../services/college.service';

@Component({
  selector: 'app-update-college',
  templateUrl: './update-college.component.html',
  styleUrls: ['./update-college.component.css']
})
export class UpdateCollegeComponent implements OnInit, OnDestroy {
  private college: College;
  private x: Subscription;

  constructor(private collegeService: CollegeService,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private dialogRef: MatDialogRef<UpdateCollegeComponent>) {
    this.college = new College();


  }

  ngOnInit() {
    this.college.id = this.data.college.id;
    this.college.nume = this.data.college.nume;
    this.college.nr = this.data.college.nr;
    this.college.telefon = this.data.college.telefon;
    this.college.strada = this.data.college.strada;
  }

  ngOnDestroy() {
    if (this.x) {
      this.x.unsubscribe();
    }
  }

  updateCollegeButton() {
    this.collegeService.updateCollege(this.college).subscribe(() => this.dialogRef.close());
  }


}
