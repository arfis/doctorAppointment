import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Doctor } from '../../models';

import {
  RootStoreState,
  DoctorStoreActions,
  DoctorStoreSelectors
} from '../../root-store';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DoctorsService } from '../../services/doctors.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
  animations: [
    trigger('heroState', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(100%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class DoctorsComponent implements OnInit {
  doctors$: Observable<Doctor[]>;
  error$: Observable<any>;
  isLoading$: Observable<boolean>;

  selectedDoctor;
  detailState;

  constructor(private store$: Store<RootStoreState.State>,
              private _doctorService: DoctorsService) { }

  onFocus(doctor) {
    if (this.selectedDoctor) {
      this.selectedDoctor = doctor;
    }
  }

  ngOnInit() {

    this.error$ = this.store$.select(
      DoctorStoreSelectors.selectDoctorError
    );

    this.isLoading$ = this.store$.select(
      DoctorStoreSelectors.selectDoctorIsLoading
    );

    this._doctorService.selectedDoctor.subscribe(
      doctor => this.selectedDoctor = doctor
    );

    this._doctorService.findDoctor.subscribe(
      name => {
        this.doctors$ = this.store$.select(
          DoctorStoreSelectors.selectDoctorsByName(name)
        );
      }
    );

  }

  closeDetail() {
   this._doctorService.selectedDoctor.next(null);
  }

  onRefresh() {
    this.store$.dispatch(
      new DoctorStoreActions.LoadRequestAction({name: null})
    );
  }

}
