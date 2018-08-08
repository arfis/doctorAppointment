import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';

@Component({
  selector: 'app-calendar-detail-row',
  templateUrl: './calendar-detail-row.component.html',
  styleUrls: ['./calendar-detail-row.component.scss']
})
export class CalendarDetailRowComponent implements OnInit {

  @Input() time;
  @Input() doctor;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  reserve() {
    this.dialog.open(ReservationFormComponent, {
      data: {
        time: this.time,
        doctor: this.doctor
      }
    });
  }
}
