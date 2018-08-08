import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDetailPageComponent } from './doctor-detail-page.component';

describe('DoctorDetailPageComponent', () => {
  let component: DoctorDetailPageComponent;
  let fixture: ComponentFixture<DoctorDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
