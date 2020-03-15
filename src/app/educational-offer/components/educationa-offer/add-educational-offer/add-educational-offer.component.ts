import {Component, OnDestroy, OnInit} from '@angular/core';
import {CollegeService} from '../../../../college/services/college.service';
import {Subscription} from 'rxjs';
import {College} from '../../../../college/model/College';

import {EducationLevel} from '../../../model/EducationLevel';
import {EducationalOfferService} from '../../../services/educational-offer.service';
import {PostEducationalOffer} from '../../../model/PostEducatinalOffer';


@Component({
  selector: 'app-add-educational-offer',
  templateUrl: './add-educational-offer.component.html',
  styleUrls: ['./add-educational-offer.component.css']
})
export class AddEducationalOfferComponent implements OnInit, OnDestroy {
  private collegeServiceSubscription: Subscription;
  private listOfColleges: College[];
  private college: College;

  private educationalOffer: PostEducationalOffer;
  private educationalOfferSubscription: Subscription;

  private educationLevel: EducationLevel[] = [
    {id: 1, educationLevel: 'licenta'},
    {id: 2, educationLevel: 'masterat'},
    {id: 3, educationLevel: 'doctorat'},
  ];

  constructor(private collegeService: CollegeService,
              private educationalOfferService: EducationalOfferService
  ) {
    this.educationalOffer = new PostEducationalOffer();
    this.college = new College();
  }

  ngOnInit() {
    this.collegeServiceSubscription = this.collegeService.getAllColleges()
      .subscribe(response => this.listOfColleges = response);
  }

  ngOnDestroy() {
    this.collegeServiceSubscription.unsubscribe();
    if (this.educationalOfferSubscription) {
      this.educationalOfferSubscription.unsubscribe();
    }
  }

  addEducOffer() {
    this.educationalOfferSubscription = this.educationalOfferService
      .addEducationOffer(this.college, this.educationalOffer)
      .subscribe();

  }


}
