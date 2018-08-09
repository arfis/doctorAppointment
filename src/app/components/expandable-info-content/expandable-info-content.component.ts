import { Component, Input, OnInit } from '@angular/core';
import { DoctorsService } from '../../services/doctors.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-expandable-info-content',
  templateUrl: './expandable-info-content.component.html',
  styleUrls: ['./expandable-info-content.component.css']
})
export class ExpandableInfoContentComponent implements OnInit {

  @Input() openingTime;
  @Input() closingTime;
  @Input() doctor;

  reservations;

  constructor(private _dataService: DataService) {

  }

  ngOnInit() {
    this._dataService.getReservations(this.doctor.id).subscribe(
      reservations => this.reservations = reservations
    );
  }

}
