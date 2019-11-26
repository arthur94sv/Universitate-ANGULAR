import {Component, OnDestroy, OnInit} from '@angular/core';
import {College} from '../../../../college/model/College';
import {Subscription} from 'rxjs';
import {CollegeService} from '../../../../college/services/college.service';
import {PromotionService} from '../../../services/promotion.service';
import {Promotion} from '../../../model/Promotion';
import {EducationLevel} from '../../../../educational-offer/model/EducationLevel';
import {MatDialog} from '@angular/material';
import {UpdatePromotionComponent} from '../update-promotion/update-promotion.component';
import {RootStudentComponent} from '../../student/root-student/root-student.component';

@Component({
  selector: 'app-get-promotions',
  templateUrl: './get-promotions.component.html',
  styleUrls: ['./get-promotions.component.css']
})
export class GetPromotionsComponent implements OnInit, OnDestroy {
  private listOfColleges: College[];
  private collegeServiceSubscription: Subscription;
  private college: College;

  private listOfPromotions: Promotion[];
  private displayListOfPromotions = false;
  private promotionSubscription: Subscription;

  private educationLevelList: EducationLevel[] = [
    {id: 1, educationLevel: 'licenta'},
    {id: 2, educationLevel: 'masterat'},
    {id: 3, educationLevel: 'doctorat'},
  ];
  private educationLevel: EducationLevel;

  private endYear: number;

  constructor(private collegeService: CollegeService, private promotionService: PromotionService, private dialog: MatDialog) {
    this.educationLevel = new EducationLevel();
  }

  ngOnInit() {
    this.collegeServiceSubscription = this.collegeService.getAllColleges().subscribe(response => this.listOfColleges = response);
  }

  ngOnDestroy() {
    this.collegeServiceSubscription.unsubscribe();
    if (this.promotionSubscription) {
      this.promotionSubscription.unsubscribe();
    }
  }

  closeDisplayListOfPromotions() {
    this.displayListOfPromotions = false;
  }

  getAllPromotions() {
    this.promotionSubscription = this.promotionService.getPromotion(this.college, this.educationLevel, this.endYear).subscribe(response => this.listOfPromotions = response);
    this.displayListOfPromotions = true;
  }

  updatePromotionDialog(promotion: Promotion) {
    this.dialog.open(UpdatePromotionComponent, {data: {promotion: promotion}});
  }

  openRootStudentDialog(promotion: Promotion) {
    this.dialog.open(RootStudentComponent, {data: {promotion: promotion}});
  }

}
