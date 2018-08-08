import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DoctorStoreEffects } from './effects';
import { featureReducer } from './reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('doctor', featureReducer),
    EffectsModule.forFeature([DoctorStoreEffects])
  ],
  providers: [DoctorStoreEffects]
})
export class DoctorStoreModule {}
