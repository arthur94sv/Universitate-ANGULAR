import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEducationalOfferComponent } from './update-educational-offer.component';

describe('UpdateEducationalOfferComponent', () => {
  let component: UpdateEducationalOfferComponent;
  let fixture: ComponentFixture<UpdateEducationalOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEducationalOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEducationalOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
