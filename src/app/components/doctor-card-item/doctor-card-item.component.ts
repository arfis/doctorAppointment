import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Doctor } from '../../models';
import { DoctorsService } from '../../services/doctors.service';

@Component({
  selector: 'app-doctor-card-item',
  templateUrl: './doctor-card-item.component.html',
  styleUrls: ['./doctor-card-item.component.scss']
})
export class DoctorCardItemComponent implements OnInit {
  @Input() doctor: Doctor;
  @Input() focused: boolean;

  @Output() onCalendarClick = new EventEmitter<boolean>();

  constructor(private _doctorService: DoctorsService) { }

  ngOnInit() {
  }

  selectDoctor() {
    this._doctorService.selectedDoctor.next(this.doctor);
  }
}
