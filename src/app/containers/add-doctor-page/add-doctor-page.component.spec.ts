import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDoctorPageComponent } from './add-doctor-page.component';

describe('AddDoctorPageComponent', () => {
  let component: AddDoctorPageComponent;
  let fixture: ComponentFixture<AddDoctorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDoctorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDoctorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
