import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import { Doctor } from '../../models';

import { featureAdapter, State } from './state';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectDoctorState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('doctor');

export const selectAllDoctorItems: (
  state: object
) => Doctor[] = featureAdapter.getSelectors(selectDoctorState).selectAll;

export const selectDoctorById = (id: string) =>
  createSelector(this.selectAllDoctorItems, (doctors: Doctor[]) => {
    if (doctors) {
      return doctors.find(p => p.id === id);
    } else {
      return null;
    }
  });

export const selectDoctorsByName = (query: string) =>
  createSelector(selectAllDoctorItems, (doctors: Doctor[]) => {
    if (doctors) {
      if (query && query.length > 0) {
        return doctors.filter(p => p.name.toLowerCase().indexOf(query) > -1 ||
          p.profession.toLowerCase().indexOf(query) > -1);
      }
    } else {
      return null;
    }
  });

export const selectDoctorError: MemoizedSelector<object, any> = createSelector(
  selectDoctorState,
  getError
);

export const selectDoctorIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(selectDoctorState, getIsLoading);
