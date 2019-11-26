import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootEducationalOfferComponent } from './root-educational-offer.component';

describe('RootEducationalOfferComponent', () => {
  let component: RootEducationalOfferComponent;
  let fixture: ComponentFixture<RootEducationalOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootEducationalOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootEducationalOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
