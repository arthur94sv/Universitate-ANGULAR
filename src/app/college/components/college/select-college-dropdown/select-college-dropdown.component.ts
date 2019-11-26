import {Component, OnDestroy, OnInit} from '@angular/core';

import {Subscription} from 'rxjs';

import {MatDialog} from '@angular/material';
import {UpdateCollegeComponent} from '../update-college/update-college.component';
import {DeleteCollegeComponent} from '../delete-college/delete-college.component';
import {RootDepartmentComponent} from '../../department/root-department/root-department.component';
import {RootProfessorComponent} from '../../professors/root-professor/root-professor.component';
import {College} from '../../../model/College';
import {CollegeService} from '../../../services/college.service';

@Component({
  selector: 'app-select-college-dropdown',
  templateUrl: './select-college-dropdown.component.html',
  styleUrls: ['./select-college-dropdown.component.css']
})
export class SelectCollegeDropdownComponent implements OnInit, OnDestroy {
  college: College;
  displayCollege = false;

  listOfCollegesDTO: College[];

  private x: Subscription;


  constructor(private collegeService: CollegeService, private dialog: MatDialog) {
    this.college = new College();
  }

  ngOnInit() {
    this.x = this.collegeService.getAllColleges().subscribe(response => this.listOfCollegesDTO = response);
  }

  ngOnDestroy() {
    if (this.x) {
      this.x.unsubscribe();
    }

  }

  displaySelectedCollege() {
    this.displayCollege = true;
  }

  close() {
    this.x.unsubscribe();
    this.displayCollege = false;
  }

  openUpdateCollegeDialog() {
    this.dialog.open(UpdateCollegeComponent,
      {data: {college: this.college}});
  }

  openDeleteCollegeDialog() {
    this.dialog.open(DeleteCollegeComponent,
      {data: {college: this.college}});
  }

  /*
                    DEPARTMENTS
   */

  openRootDepartmentsDialog() {
    this.dialog.open(RootDepartmentComponent, {
      height: '500px', width: '1000px',
      data: {college: this.college}
    });

  }

  /*
                    PROFESSORS
   */

  openRootProfessorsDialog(college: College) {
    this.dialog.open(RootProfessorComponent,
      {
        height: '700px', width: '1500px',
        data: {college: college}
      });
  }

}
