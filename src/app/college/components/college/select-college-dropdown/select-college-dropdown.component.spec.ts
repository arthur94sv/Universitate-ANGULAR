import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCollegeDropdownComponent } from './select-college-dropdown.component';

describe('SelectCollegeDropdownComponent', () => {
  let component: SelectCollegeDropdownComponent;
  let fixture: ComponentFixture<SelectCollegeDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCollegeDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCollegeDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
