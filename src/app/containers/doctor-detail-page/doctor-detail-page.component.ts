import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-doctor-detail-page',
  templateUrl: './doctor-detail-page.component.html',
  styleUrls: ['./doctor-detail-page.component.scss'],
})
export class DoctorDetailPageComponent {

  @Input() doctor;

  constructor() { }

  openOrder() {

  }
}
