import { TestBed } from '@angular/core/testing';

import { EducationalOfferService } from './educational-offer.service';

describe('EducationalOfferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EducationalOfferService = TestBed.get(EducationalOfferService);
    expect(service).toBeTruthy();
  });
});
