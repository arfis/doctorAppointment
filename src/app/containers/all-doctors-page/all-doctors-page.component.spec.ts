import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDoctorsPageComponent } from './all-doctors-page.component';

describe('AllDoctorsPageComponent', () => {
  let component: AllDoctorsPageComponent;
  let fixture: ComponentFixture<AllDoctorsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDoctorsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDoctorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
