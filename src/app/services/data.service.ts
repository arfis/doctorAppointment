import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Doctor, DoctorResult } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private mockData = [{
    id: 0,
    name: 'Dr. Bucko',
    profession: 'Dentist',
    rating: 5,
    description: 'Great doctor who has got 20 years of practise. Studied in Seattle university. Worked in Boston for 10 years.',
    city: 'Bratislava',
    zip: 84101,
    openingTime: 50400,
    closingTime: 61200
  },
    {
      id: 1,
      name: 'Dr. Haus',
      profession: 'Chiropractic',
      rating: 9,
      description: 'Great doctor',
      city: 'Bratislava',
      zip: 84101,
      openingTime: 50400,
      closingTime: 64800
    },
    {
      id: 2,
      name: 'Dr. Bauhaus',
      profession: 'Cardiovascular',
      rating: 2,
      description: 'Great doctor',
      city: 'Bratislava',
      zip: 84101,
      openingTime: 50400,
      closingTime: 68400,
    }];

  private reservations = [
    {
      doctorId: 1,
      reservations: [
        {
          fromTime: 50400,
          toTime: 52800
        },
        {
          fromTime: 51600,
          toTime: 52800
        },
        {
          fromTime: 53000,
          toTime: 52800
        },
        {
          fromTime: 54200,
          toTime: 52800
        },
        {
          fromTime: 55400,
          toTime: 52800
        }
      ],
    },
    {
      doctorId: 2,
      reservations: [
        {
          fromTime: 50400,
          toTime: 52800
        },
        {
          fromTime: 54200,
          toTime: 52800
        },
        {
          fromTime: 57600,
          toTime: 52800
        }],
    },
    {
      doctorId: 0,
      reservations: [
        {
          fromTime: 50400,
          toTime: 52800
        },
        {
          fromTime: 57600,
          toTime: 52800
        }]
    }
  ];

  constructor(private http: HttpClient) {
  }

  getReservations(doctorId) {
    const reservations = this.reservations.find(reservation => reservation.doctorId === doctorId);

    if (reservations) {
      return of(reservations.reservations);
    } else {
      return of(null);
    }
  }

  getDoctors({name}): Observable<Doctor[]> {

    let filteredData = this.mockData;

    if (name) {
      filteredData = this.mockData.filter(
        doctor => doctor.name.toLowerCase().indexOf(name.toLowerCase()) > -1 ||
          doctor.profession.toLowerCase().indexOf(name.toLowerCase()) > -1
      );
    }

    return of(filteredData).pipe(delay(400));
  }
}
