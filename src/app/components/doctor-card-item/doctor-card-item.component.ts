import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Doctor } from '../../models';

@Component({
  selector: 'app-doctor-card-item',
  templateUrl: './doctor-card-item.component.html',
  styleUrls: ['./doctor-card-item.component.scss']
})
export class DoctorCardItemComponent implements OnInit {
  @Input() doctor: Doctor;
  @Input() focused: boolean;

  @Output() onSelect = new EventEmitter<Doctor>();

  constructor() { }

  ngOnInit() {
  }

  selectDoctor() {
    this.onSelect.emit(this.doctor);
  }

}
