import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Doctor } from '../../models';
import { DoctorsService } from '../../services/doctors.service';

@Component({
  selector: 'app-doctor-card-list',
  templateUrl: './doctor-card-list.component.html',
  styleUrls: ['./doctor-card-list.component.scss']
})
export class DoctorCardListComponent implements OnInit {

  @Input() doctors: Doctor[];
  @Input() loading: boolean;
  @Input() error: any;

  @Output() refresh = new EventEmitter();
  @Output() focused = new EventEmitter<any>();

  activeDoctor;
  selectedDoctor;
  fullWidth;

  constructor(private _doctorService: DoctorsService) { }

  ngOnInit() {
    this._doctorService.selectedDoctor.subscribe(
      doctor => this.selectedDoctor = doctor
    );
  }

  doctorTracker(index, item) {
    return item.id;
  }

  onfullWidth(fullWidth) {
    this.fullWidth = fullWidth;
  }

  makeActive(doctor) {
    //this.doctors = [doctor, ...this.doctors.filter(current => current !== doctor)]
    this.activeDoctor = doctor;//this.doctors[0];
    this.focused.next(doctor);
  }

}
