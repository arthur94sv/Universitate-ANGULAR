import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootCoursComponent } from './root-cours.component';

describe('RootCoursComponent', () => {
  let component: RootCoursComponent;
  let fixture: ComponentFixture<RootCoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootCoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
