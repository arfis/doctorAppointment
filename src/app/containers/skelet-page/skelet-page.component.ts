import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../../services/doctors.service';
import { DoctorStoreActions, DoctorStoreSelectors, RootStoreState } from '../../root-store';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-skelet-page',
  templateUrl: './skelet-page.component.html',
  styleUrls: ['./skelet-page.component.css']
})
export class SkeletPageComponent implements OnInit {

  hasSearch = true;
  routeTitle;
  results = 0;
  firstSearch = false;

  constructor(private _doctorService: DoctorsService,
              private store$: Store<RootStoreState.State>,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.url.subscribe(
      route => {
        console.log(route);
      }
    );
  }

  updateRoute(route) {
    console.log(route);
    this.routeTitle = route;
    this.hasSearch = route === 'search';
  }

  ngOnInit() {
    this.store$.dispatch(
      new DoctorStoreActions.LoadRequestAction({name: null})
    );

    this.activatedRoute.data.subscribe(
      data => console.log(data)
    );
  }

  findDoctors(name) {

    console.log('finding ', name);
    this._doctorService.findDoctor.next(name);

    this.store$.select(
      DoctorStoreSelectors.selectDoctorsByName(name)
    ).subscribe(
      results => {
        this.results = results ? results.length : 0;
        if (!this.firstSearch) {
          this.firstSearch = this.results > 0;
        }
      }
    );

    // this.store$.dispatch(
    //   new DoctorStoreActions.LoadRequestAction({name})
    // );
  }
}
