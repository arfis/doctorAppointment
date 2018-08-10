import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule, MatExpansionModule,
  MatIconModule, MatInputModule,
  MatProgressBarModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorCardItemComponent } from './components/doctor-card-item/doctor-card-item.component';
import { DoctorCardListComponent } from './components/doctor-card-list/doctor-card-list.component';
import { DoctorsComponent } from './containers/doctors/doctors.component';
import { RootStoreModule } from './root-store';
import { DoctorSearchComponent } from './components/doctor-search/doctor-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExpandableInfoContentComponent } from './components/expandable-info-content/expandable-info-content.component';
import { CalendarComponent } from './containers/calendar/calendar.component';
import { LoadingComponent } from './components/loading/loading.component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CalendarDayComponent } from './components/calendar-day/calendar-day.component';
import { DayDetailComponent } from './components/day-detail/day-detail.component';
import { CalendarDetailRowComponent } from './components/calendar-detail-row/calendar-detail-row.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DoctorDetailPageComponent } from './containers/doctor-detail-page/doctor-detail-page.component';
import { TimeTransformPipe } from './containers/time-transform.pipe';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { HamburgerComponent } from './components/hamburger/hamburger.component';
import { AddDoctorPageComponent } from './containers/add-doctor-page/add-doctor-page.component';
import { SkeletPageComponent } from './containers/skelet-page/skelet-page.component';
import { DoctorsService } from './services/doctors.service';
import { AllDoctorsPageComponent } from './containers/all-doctors-page/all-doctors-page.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';

export function HttpLoaderFactory(http: HttpClient) {
  // return new TranslateHttpLoader(http);
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RootStoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatExpansionModule,
    MatDialogModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [
    AppComponent,
    DoctorsComponent,
    DoctorCardListComponent,
    DoctorCardItemComponent,
    DoctorSearchComponent,
    ExpandableInfoContentComponent,
    CalendarComponent,
    LoadingComponent,
    CalendarDayComponent,
    DayDetailComponent,
    CalendarDetailRowComponent,
    DoctorDetailPageComponent,
    TimeTransformPipe,
    ReservationFormComponent,
    HamburgerComponent,
    AddDoctorPageComponent,
    SkeletPageComponent,
    AllDoctorsPageComponent,
    LanguageSelectorComponent
  ],
  providers: [
    TimeTransformPipe,
    DoctorsService
  ],
  entryComponents: [
    ReservationFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
