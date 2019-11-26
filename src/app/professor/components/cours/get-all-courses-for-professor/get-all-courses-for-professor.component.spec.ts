import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllCoursesForProfessorComponent } from './get-all-courses-for-professor.component';

describe('GetAllCoursesForProfessorComponent', () => {
  let component: GetAllCoursesForProfessorComponent;
  let fixture: ComponentFixture<GetAllCoursesForProfessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllCoursesForProfessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllCoursesForProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
