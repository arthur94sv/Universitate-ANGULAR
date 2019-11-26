import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootProfessorComponent } from './root-professor.component';

describe('RootProfessorComponent', () => {
  let component: RootProfessorComponent;
  let fixture: ComponentFixture<RootProfessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootProfessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
