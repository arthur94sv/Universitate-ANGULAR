import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteStudentForPromotionComponent } from './delete-student-for-promotion.component';

describe('DeleteStudentComponent', () => {
  let component: DeleteStudentForPromotionComponent;
  let fixture: ComponentFixture<DeleteStudentForPromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteStudentForPromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteStudentForPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
