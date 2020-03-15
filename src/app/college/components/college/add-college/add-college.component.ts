import {Component, OnDestroy, OnInit} from '@angular/core';
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
  private x: Subscription;

  constructor(private collegeService: CollegeService) {

  }

  ngOnInit() {
    this.college = new College();
  }

  ngOnDestroy() {
    if (this.x) {
      this.x.unsubscribe();
    }
  }

  addCollege() {
    this.x = this.collegeService.addCollege(this.college).subscribe();
  }


}
