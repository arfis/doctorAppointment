import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Doctor } from '../../models';

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
  @Output() select = new EventEmitter<any>();

  activeDoctor;

  constructor() { }

  ngOnInit() {
  }

  selectDoctor(doctor) {
    this.select.next(doctor);
  }

  doctorTracker(index, item) {
    return item.id;
  }

  makeActive(doctor) {
    //this.doctors = [doctor, ...this.doctors.filter(current => current !== doctor)]
    this.activeDoctor = doctor;//this.doctors[0];
  }

}
