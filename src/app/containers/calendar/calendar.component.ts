import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  numberOfDays = 0;
  days = [];
  dayNames = [];
  selectedDay;

  @Input()
  openingTime;
  @Input()
  closingTime;

  constructor() { }

  ngOnInit() {
    this.numberOfDays = moment().daysInMonth();
    this.dayNames = moment.weekdays();
    this.days = Array<any>(this.numberOfDays);
  }

  selectDay(i) {
    console.log('selecting day ', i);
    this.selectedDay = i;
  }
}
