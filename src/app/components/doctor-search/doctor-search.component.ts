import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { DoctorStoreActions } from '../../root-store';

@Component({
  selector: 'app-doctor-search',
  templateUrl: './doctor-search.component.html',
  styleUrls: ['./doctor-search.component.scss']
})
export class DoctorSearchComponent implements OnInit, AfterViewInit {

  @ViewChild('search')
  searchInput;

  @Output()
  onSearch = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {

  }

  searchDoctors() {
    console.log('search');
  }
  ngAfterViewInit() {
    fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(debounceTime(200))
      .subscribe(
      result => {
        this.onSearch.next(this.searchInput.nativeElement.value);
      }
    )
  }
}
