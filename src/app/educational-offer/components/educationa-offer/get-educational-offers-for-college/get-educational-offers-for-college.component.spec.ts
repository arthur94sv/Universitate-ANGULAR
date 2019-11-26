import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEducationalOffersForCollegeComponent } from './get-educational-offers-for-college.component';

describe('GetEducationalOffersForCollegeComponent', () => {
  let component: GetEducationalOffersForCollegeComponent;
  let fixture: ComponentFixture<GetEducationalOffersForCollegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetEducationalOffersForCollegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEducationalOffersForCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
