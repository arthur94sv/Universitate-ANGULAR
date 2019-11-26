import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Promotion} from '../../../model/Promotion';
import {PromotionService} from '../../../services/promotion.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-update-promotion',
  templateUrl: './update-promotion.component.html',
  styleUrls: ['./update-promotion.component.css']
})
export class UpdatePromotionComponent implements OnInit, OnDestroy {
  private promotion: Promotion;
  private x: Subscription;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private promotionService: PromotionService,
              public dialogRef: MatDialogRef<UpdatePromotionComponent>) {
    this.promotion = new Promotion();
  }

  ngOnInit() {
    this.promotion.id = this.data.promotion.id;
    this.promotion.nrLocuriBuget = this.data.promotion.nrLocuriBuget;
    this.promotion.nrLocuriTaxa = this.data.promotion.nrLocuriTaxa;
  }

  ngOnDestroy() {
    if (this.x) {
      this.x.unsubscribe();
    }
  }

  updatePromotionButton() {
    this.x = this.promotionService.updatePromotion(this.promotion).subscribe(() => this.dialogRef.close());
  }

}
