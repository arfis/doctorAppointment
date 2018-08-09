import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../../services/doctors.service';
import { Observable } from 'rxjs';
import { Doctor } from '../../models';
import { Store } from '@ngrx/store';
import { DoctorStoreSelectors, RootStoreState } from '../../root-store';

@Component({
  selector: 'app-all-doctors-page',
  templateUrl: './all-doctors-page.component.html',
  styleUrls: ['./all-doctors-page.component.css']
})
export class AllDoctorsPageComponent implements OnInit {

  doctors$: Observable<Doctor[]>;
  error$: Observable<any>;
  isLoading$: Observable<boolean>;

  constructor(private store$: Store<RootStoreState.State>) { }

  ngOnInit() {
    this.doctors$ = this.store$.select(DoctorStoreSelectors.selectAllDoctorItems);
  }

}
