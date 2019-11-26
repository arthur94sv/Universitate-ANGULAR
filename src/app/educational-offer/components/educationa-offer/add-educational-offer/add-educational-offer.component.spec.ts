import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEducationalOfferComponent } from './add-educational-offer.component';

describe('AddEducationalOfferComponent', () => {
  let component: AddEducationalOfferComponent;
  let fixture: ComponentFixture<AddEducationalOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEducationalOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEducationalOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
