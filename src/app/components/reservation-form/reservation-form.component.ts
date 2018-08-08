import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TimeTransformPipe } from '../../containers/time-transform.pipe';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent implements OnInit {

  headerInfo;
  doctor;
  time;

  constructor(public dialogRef: MatDialogRef<any>,
              private timePipe: TimeTransformPipe,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    const {time, doctor} = this.data;
    this.doctor = doctor;
    this.time = time;
  }

  ngOnInit() {
  }

}
