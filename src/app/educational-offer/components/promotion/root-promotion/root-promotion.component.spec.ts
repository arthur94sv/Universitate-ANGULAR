import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootPromotionComponent } from './root-promotion.component';

describe('RootPromotionComponent', () => {
  let component: RootPromotionComponent;
  let fixture: ComponentFixture<RootPromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootPromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
