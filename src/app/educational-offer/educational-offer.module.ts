import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddEducationalOfferComponent} from './components/educationa-offer/add-educational-offer/add-educational-offer.component';
import {RootEducationalOfferComponent} from './components/educationa-offer/root-educational-offer/root-educational-offer.component';
import {HttpClient} from '@angular/common/http';
import {CollegeService} from '../college/services/college.service';
import {FormsModule} from '@angular/forms';
import {GetEducationalOffersForCollegeComponent} from './components/educationa-offer/get-educational-offers-for-college/get-educational-offers-for-college.component';
import {UpdateEducationalOfferComponent} from './components/educationa-offer/update-educational-offer/update-educational-offer.component';
import {RootPromotionComponent} from './components/promotion/root-promotion/root-promotion.component';
import {AddPromotionComponent} from './components/promotion/add-promotion/add-promotion.component';
import {PromotionService} from '../promotion/services/promotion.service';
import {PromotionModule} from '../promotion/promotion.module';
import {GetPromotionComponent} from './components/promotion/get-promotions/get-promotion.component';
import {MatDialogModule} from '@angular/material';


@NgModule({
  declarations: [AddEducationalOfferComponent, RootEducationalOfferComponent, GetEducationalOffersForCollegeComponent, UpdateEducationalOfferComponent, RootPromotionComponent, AddPromotionComponent, GetPromotionComponent],
  imports: [
    CommonModule, FormsModule, PromotionModule, MatDialogModule
  ],
  providers: [HttpClient, CollegeService, PromotionService],
  exports: [RootEducationalOfferComponent]
})
export class EducationalOfferModule {
}
