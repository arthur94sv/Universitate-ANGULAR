import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootDepartmentComponent } from './root-department.component';

describe('RootDepartmentComponent', () => {
  let component: RootDepartmentComponent;
  let fixture: ComponentFixture<RootDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
