import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllStudentsForPromotionComponent } from './get-all-students-for-promotion.component';

describe('GetAllStudentsForPromotionComponent', () => {
  let component: GetAllStudentsForPromotionComponent;
  let fixture: ComponentFixture<GetAllStudentsForPromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllStudentsForPromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllStudentsForPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
