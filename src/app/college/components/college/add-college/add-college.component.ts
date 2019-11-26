import {Component, OnDestroy, OnInit} from '@angular/core';
import {CollegeError} from '../../../errors/CollegeError';
import {Subscription} from 'rxjs';
import {College} from '../../../model/College';
import {CollegeService} from '../../../services/college.service';

@Component({
  selector: 'app-add-college',
  templateUrl: './add-college.component.html',
  styleUrls: ['./add-college.component.css']
})
export class AddCollegeComponent implements OnInit, OnDestroy {
  private college: College;
  private collegeError: CollegeError;
  private x: Subscription;

  constructor(private collegeService: CollegeService) {
    this.college = new College();
    this.collegeError = new CollegeError();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.x) {
      this.x.unsubscribe();
    }
  }

  addCollege() {
    this.x = this.collegeService.addCollege(this.college).subscribe(response => this.collegeError = response);
    this.clearCollegeForm();
  }

  clearCollegeForm() {
    this.college = new College();
  }

}
