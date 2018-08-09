import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-day-detail',
  templateUrl: './day-detail.component.html',
  styleUrls: ['./day-detail.component.scss']
})
export class DayDetailComponent implements OnInit {

  @Input() selected;
  @Input() partSize;
  @Input() openingTime;
  @Input() closingTime;
  @Input() doctor;
  @Input() reservations;

  timeParts = [];

  constructor() { }

  ngOnInit() {
    this.partSize = this.partSize * 60;
    this.timeParts = [];

    for (let part = this.openingTime; part <= this.closingTime; part = part + this.partSize) {
      this.timeParts.push(part);
    }
    console.log(this.timeParts);
  }

  isReserved(part) {
    return this.reservations.some(reservation => reservation.fromTime === part);
  }
}
