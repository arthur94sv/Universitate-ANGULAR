import {Component, Input, OnDestroy, OnInit} from '@angular/core';


import {PromotionService} from '../../../../promotion/services/promotion.service';
import {Subscription} from 'rxjs';
import {GetEducationalOffer} from '../../../model/GetEducationalOffer';
import {PromotionForEducOffer} from '../../../model/PromotionForEducOffer';


@Component({
  selector: 'app-add-promotion',
  templateUrl: './add-promotion.component.html',
  styleUrls: ['./add-promotion.component.css']
})
export class AddPromotionComponent implements OnInit, OnDestroy {
  @Input('educationalOffer') private educationalOffer: GetEducationalOffer;
  private promotion: PromotionForEducOffer;
  private x: Subscription;

  constructor(private promotionService: PromotionService) {
    this.promotion = new PromotionForEducOffer();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.x) {
      this.x.unsubscribe();
    }
  }

  addPromotionToEducOffer() {
    this.x = this.promotionService.addPromotion(this.educationalOffer, this.promotion).subscribe();
    this.clearPromotionForm();
  }

  clearPromotionForm() {
    this.promotion = new PromotionForEducOffer();
  }

}
