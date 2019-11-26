import {Component, OnDestroy, OnInit} from '@angular/core';

import {MatDialog} from '@angular/material';

import {UpdateCollegeComponent} from '../update-college/update-college.component';
import {DeleteCollegeComponent} from '../delete-college/delete-college.component';
import {RootDepartmentComponent} from '../../department/root-department/root-department.component';
import {Subscription} from 'rxjs';
import {RootProfessorComponent} from '../../professors/root-professor/root-professor.component';
import {College} from '../../../model/College';
import {CollegeService} from '../../../services/college.service';

@Component({
  selector: 'app-get-all-colleges',
  templateUrl: './get-all-colleges.component.html',
  styleUrls: ['./get-all-colleges.component.css']
})
export class GetAllCollegesComponent implements OnInit, OnDestroy {
  private listOfColleges: College[];
  private displayListOfColleges = false;
  private collegeName: string = null;
  private x: Subscription;

  constructor(private collegeService: CollegeService, private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.x) {
      this.x.unsubscribe();
    }
  }

  getAllColleges() {
    this.x = this.collegeService.getAllColleges().subscribe(response => this.listOfColleges = response);
    this.displayListOfColleges = true;
    this.collegeName = null;
  }

  close() {
    this.displayListOfColleges = false;
  }

  openUpdateCollegeDialog(college: College) {
    this.dialog.open(UpdateCollegeComponent,
      {data: {college: college}});
  }

  openDeleteCollegeDialog(college: College) {
    this.dialog.open(DeleteCollegeComponent,
      {data: {college: college}});
  }

  /*
             DEPARTMENTS
   */

  openRootDepartmentsDialog(college: College) {
    this.dialog.open(RootDepartmentComponent, {
      height: '500px', width: '1000px',
      data: {college: college}
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
