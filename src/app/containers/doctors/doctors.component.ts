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

@Component({
  selector: 'app-jokes',
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

  constructor(private store$: Store<RootStoreState.State>) { }

  onSelect(doctor) {
    this.selectedDoctor = doctor;
  }

  ngOnInit() {
    this.doctors$ = this.store$.select(
      DoctorStoreSelectors.selectAllDoctorItems
    );

    this.error$ = this.store$.select(
      DoctorStoreSelectors.selectDoctorError
    );

    this.isLoading$ = this.store$.select(
      DoctorStoreSelectors.selectDoctorIsLoading
    );

    this.store$.dispatch(
      new DoctorStoreActions.LoadRequestAction({name: null})
    );
  }

  findDoctors(name) {
    this.store$.dispatch(
      new DoctorStoreActions.LoadRequestAction({name})
    );
  }

  closeDetail() {
    this.selectedDoctor = null;
  }

  onRefresh() {
    this.store$.dispatch(
      new DoctorStoreActions.LoadRequestAction({name: null})
    );
  }

}
