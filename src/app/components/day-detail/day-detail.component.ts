import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-day-detail',
  templateUrl: './day-detail.component.html',
  styleUrls: ['./day-detail.component.scss']
})
export class DayDetailComponent implements OnChanges {

  @Input() selected;
  @Input() partSize;
  @Input() openingTime;
  @Input() closingTime;
  @Input() doctor;

  timeParts = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.partSize = this.partSize * 60;
    for (let part = this.openingTime; part <= this.closingTime; part = part + this.partSize) {
      this.timeParts.push(part);
    }
    console.log(this.timeParts);
  }
}
