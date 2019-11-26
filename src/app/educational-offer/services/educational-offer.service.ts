import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {College} from '../../college/model/College';
import {PostEducationalOffer} from '../model/PostEducatinalOffer';
import {GetEducationalOffer} from '../model/GetEducationalOffer';
import {PutEducationalOffer} from '../model/PutEducationalOffer';
import {EducationalOfferError} from '../errors/EducationalOfferError';


@Injectable({
  providedIn: 'root'
})
export class EducationalOfferService {

  constructor(private http: HttpClient) {
  }

  public addEducationOffer(college: College, postEducationalOffer: PostEducationalOffer) {
    return this.http.post<EducationalOfferError>('http://localhost:8081/colleges/' + college.id + '/educationalOffers', postEducationalOffer);
  }

  public getEducOffersForCollege(college: College) {
    return this.http.get<GetEducationalOffer[]>('http://localhost:8081/colleges/' + college.id + '/educationalOffers');
  }

  public updateEducOffer(educationalOffer: PutEducationalOffer) {
    return this.http.put('http://localhost:8081/educationalOffers/' + educationalOffer.id, educationalOffer);
  }
}
