import { createSelector, MemoizedSelector } from '@ngrx/store';
import {
  DoctorStoreSelectors
} from './doctor-store';

export const selectError: MemoizedSelector<object, string> = createSelector(
  DoctorStoreSelectors.selectDoctorError,
  (jokeError: string) => {
    return jokeError;
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
