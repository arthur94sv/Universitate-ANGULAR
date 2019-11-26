import {Component, Inject, OnInit} from '@angular/core';

import {MAT_DIALOG_DATA} from '@angular/material';
import {GetEducationalOffer} from '../../../model/GetEducationalOffer';

@Component({
  selector: 'app-root-promotion',
  templateUrl: './root-promotion.component.html',
  styleUrls: ['./root-promotion.component.css']
})
export class RootPromotionComponent implements OnInit {
  private educationalOffer: GetEducationalOffer;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any) {
  }

  ngOnInit() {
    this.educationalOffer = this.data.educOffer;
  }


}
