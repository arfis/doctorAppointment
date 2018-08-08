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
  createSelector(this.selectAllDoctorItems, (allJokes: Doctor[]) => {
    if (allJokes) {
      return allJokes.find(p => p.id === id);
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
