import {Component, OnDestroy, OnInit} from '@angular/core';
import {College} from '../../../../college/model/College';
import {CollegeService} from '../../../../college/services/college.service';
import {Subscription} from 'rxjs';
import {EducationalOfferService} from '../../../services/educational-offer.service';

import {MatDialog} from '@angular/material';
import {UpdateEducationalOfferComponent} from '../update-educational-offer/update-educational-offer.component';
import {RootPromotionComponent} from '../../promotion/root-promotion/root-promotion.component';
import {GetEducationalOffer} from '../../../model/GetEducationalOffer';

@Component({
  selector: 'app-get-educational-offers-for-college',
  templateUrl: './get-educational-offers-for-college.component.html',
  styleUrls: ['./get-educational-offers-for-college.component.css']
})
export class GetEducationalOffersForCollegeComponent implements OnInit, OnDestroy {
  private listOfColleges: College[];
  private collegeServiceSubscription: Subscription;

  private college: College;

  private displayEducOffer = false;
  private listOfEducationalOffers: GetEducationalOffer[];
  private educOfferSubscription: Subscription;

  constructor(private collegeService: CollegeService,
              private educOfferService: EducationalOfferService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.collegeServiceSubscription = this.collegeService.getAllColleges()
      .subscribe(response => this.listOfColleges = response);
  }

  ngOnDestroy() {
    this.collegeServiceSubscription.unsubscribe();
    if (this.educOfferSubscription) {
      this.educOfferSubscription.unsubscribe();
    }
  }

  getEducOffers() {
    this.educOfferSubscription = this.educOfferService.getEducOffersForCollege(this.college)
      .subscribe(response => this.listOfEducationalOffers = response);
    this.displayEducOffer = true;
  }

  closeDisplayListEducOffer() {
    this.displayEducOffer = false;
  }

  openUpdateEducOfferDialog(educationalOffer: GetEducationalOffer) {
    this.dialog.open(UpdateEducationalOfferComponent,
      {data: {educOffer: educationalOffer}});
  }

  openRootPromotionDialog(educationalOffer: GetEducationalOffer) {
    this.dialog.open(RootPromotionComponent,
      {
        height: '700px', width: '1500px',
        data: {educOffer: educationalOffer}
      });
  }
}
