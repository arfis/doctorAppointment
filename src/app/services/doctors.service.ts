import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Doctor } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  selectedDoctor = new BehaviorSubject<Doctor>(null);
  findDoctor = new Subject<any>();

  constructor() { }
}
