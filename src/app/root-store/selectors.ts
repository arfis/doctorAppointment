import { createSelector, MemoizedSelector } from '@ngrx/store';
import {
  DoctorStoreSelectors
} from './doctor-store';

export const selectError: MemoizedSelector<object, string> = createSelector(
  DoctorStoreSelectors.selectDoctorError,
  (error: string) => {
    return error;
  }
);

export const selectIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(
  DoctorStoreSelectors.selectDoctorIsLoading,
  (doctor: boolean) => {
    return doctor;
  }
);
