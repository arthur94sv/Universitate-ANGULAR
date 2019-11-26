import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootCollegeComponent } from './root-college.component';

describe('RootCollegeComponent', () => {
  let component: RootCollegeComponent;
  let fixture: ComponentFixture<RootCollegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootCollegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
