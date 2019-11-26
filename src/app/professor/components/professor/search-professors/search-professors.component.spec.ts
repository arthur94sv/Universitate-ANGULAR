import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProfessorsComponent } from './search-professors.component';

describe('SearchProfessorsComponent', () => {
  let component: SearchProfessorsComponent;
  let fixture: ComponentFixture<SearchProfessorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProfessorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProfessorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
