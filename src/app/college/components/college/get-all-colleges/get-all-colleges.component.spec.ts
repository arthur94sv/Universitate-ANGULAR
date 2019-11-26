import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllCollegesComponent } from './get-all-colleges.component';

describe('GetAllCollegesComponent', () => {
  let component: GetAllCollegesComponent;
  let fixture: ComponentFixture<GetAllCollegesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllCollegesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllCollegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
