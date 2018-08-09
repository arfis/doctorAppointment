import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsComponent } from './containers/doctors/doctors.component';
import { AddDoctorPageComponent } from './containers/add-doctor-page/add-doctor-page.component';
import { SkeletPageComponent } from './containers/skelet-page/skelet-page.component';
import { AllDoctorsPageComponent } from './containers/all-doctors-page/all-doctors-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'doctors', pathMatch: 'full' },
  {
    path: 'doctors',
    component: SkeletPageComponent,
    children: [
      {
        path: 'addDoctor',
        component: AddDoctorPageComponent
      },
      {
        path: 'allDoctors',
        component: AllDoctorsPageComponent
      },
      {
        path: '**',
        component: DoctorsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
