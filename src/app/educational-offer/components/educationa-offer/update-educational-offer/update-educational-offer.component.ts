import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {EducationalOfferService} from '../../../services/educational-offer.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Subscription} from 'rxjs';
import {PutEducationalOffer} from '../../../model/PutEducationalOffer';

@Component({
  selector: 'app-update-educational-offer',
  templateUrl: './update-educational-offer.component.html',
  styleUrls: ['./update-educational-offer.component.css']
})
export class UpdateEducationalOfferComponent implements OnInit, OnDestroy {
  private educationalOffer: PutEducationalOffer;
  private x: Subscription;

  constructor(private educOfferService: EducationalOfferService,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private dialogRef: MatDialogRef<UpdateEducationalOfferComponent>) {
    this.educationalOffer = new PutEducationalOffer();
  }

  ngOnInit() {
    this.educationalOffer.id = this.data.educOffer.id;
    this.educationalOffer.name = this.data.educOffer.name;
  }

  ngOnDestroy() {
    if (this.x) {
      this.x.unsubscribe();
    }
  }

  updateEducationalOfferButton() {
    this.x = this.educOfferService.updateEducOffer(this.educationalOffer).subscribe(() => this.dialogRef.close());
  }


}
