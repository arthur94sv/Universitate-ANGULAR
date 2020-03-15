import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Promotion} from '../model/Promotion';

import {College} from '../../college/model/College';
import {EducationLevel} from '../../educational-offer/model/EducationLevel';
import {GetEducationalOffer} from '../../educational-offer/model/GetEducationalOffer';
import {PromotionForEducOffer} from '../../educational-offer/model/PromotionForEducOffer';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient) {
  }

  public addPromotion(educationOffer: GetEducationalOffer, promotion: PromotionForEducOffer) {
    return this.http.post('http://localhost:8081/educationalOffers/' + educationOffer.id + '/promotions', promotion);
  }

  public getPromotionForEducOffer(educationOffer: GetEducationalOffer) {
    return this.http.get<PromotionForEducOffer[]>('http://localhost:8081/educationalOffers/' + educationOffer.id + '/promotions');
  }

  public getPromotion(college: College, educationLevel: EducationLevel, endYear: number) {
    if (educationLevel.id != null && endYear === undefined) {
      return this.http.get<Promotion[]>('http://localhost:8081/colleges/' + college.id + '/promotions/?idEducLevel=' + educationLevel.id);
    } else if (educationLevel.id != null && endYear != null) {
      return this.http.get<Promotion[]>('http://localhost:8081/colleges/' + college.id + '/promotions/?idEducLevel=' + educationLevel.id + '&endYear=' + endYear);
    } else {
      return this.http.get<Promotion[]>('http://localhost:8081/colleges/' + college.id + '/promotions/');
    }
  }

  public updatePromotion(promotion: Promotion) {
    return this.http.put('http://localhost:8081/promotions/' + promotion.id, promotion);
  }

}
