import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit {

  @Output() updateRoute = new EventEmitter<string>();
  isActive;

  constructor() { }

  ngOnInit() {
  }

  activate() {
    this.isActive = !this.isActive;
  }

  hide(route) {
    this.updateRoute.next(route);
    this.isActive = false;
  }
}
