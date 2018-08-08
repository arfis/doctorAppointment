import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expandable-info-content',
  templateUrl: './expandable-info-content.component.html',
  styleUrls: ['./expandable-info-content.component.css']
})
export class ExpandableInfoContentComponent implements OnInit {

  @Input() openingTime;
  @Input() closingTime;
  @Input() doctor;

  constructor() { }

  ngOnInit() {
  }

}
