import {Component, Input, OnDestroy, OnInit} from '@angular/core';


import {Subscription} from 'rxjs';
import {PromotionService} from '../../../../promotion/services/promotion.service';
import {GetEducationalOffer} from '../../../model/GetEducationalOffer';
import {PromotionForEducOffer} from '../../../model/PromotionForEducOffer';

@Component({
  selector: 'app-get-promotions',
  templateUrl: './get-promotion.component.html',
  styleUrls: ['./get-promotion.component.css']
})
export class GetPromotionComponent implements OnInit, OnDestroy {
  @Input('educationalOffer') educationalOffer: GetEducationalOffer;
  private listOfPromotions: PromotionForEducOffer[];
  private displayListOfPromotions = false;

  private x: Subscription;

  constructor(private promotionService: PromotionService) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.x) {
      this.x.unsubscribe();
    }
  }

  getPromotions() {
    this.x = this.promotionService.getPromotionForEducOffer(this.educationalOffer).subscribe(response => this.listOfPromotions = response);
    this.displayListOfPromotions = true;
  }


  closeDisplayListOfPromotions() {
    this.displayListOfPromotions = false;
  }
}
