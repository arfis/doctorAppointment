import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarDetailRowComponent } from './calendar-detail-row.component';

describe('CalendarDetailRowComponent', () => {
  let component: CalendarDetailRowComponent;
  let fixture: ComponentFixture<CalendarDetailRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarDetailRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarDetailRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
