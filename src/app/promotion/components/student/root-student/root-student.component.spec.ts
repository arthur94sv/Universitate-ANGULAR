import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootStudentComponent } from './root-student.component';

describe('RootStudentComponent', () => {
  let component: RootStudentComponent;
  let fixture: ComponentFixture<RootStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
