import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllProfessorForCollegeComponent } from './get-all-professor-for-college.component';

describe('GetAllProfessorForCollegeComponent', () => {
  let component: GetAllProfessorForCollegeComponent;
  let fixture: ComponentFixture<GetAllProfessorForCollegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllProfessorForCollegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllProfessorForCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
