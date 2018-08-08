import { Action } from '@ngrx/store';
import { Doctor } from '../../models';

export enum ActionTypes {
  LOAD_REQUEST = '[Doctor] Load Request',
  LOAD_FAILURE = '[Doctor] Load Failure',
  LOAD_SUCCESS = '[Doctor] Load Success',
  SELECT_DOCTOR = '[Doctor] Selecting detail'
}

export class LoadRequestAction implements Action {
  readonly type = ActionTypes.LOAD_REQUEST;
  constructor(public payload: { name: string }) {}
}

export class LoadFailureAction implements Action {
  readonly type = ActionTypes.LOAD_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class LoadSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;
  constructor(public payload: { items: Doctor[] }) {}
}

export class SelectDoctorAction implements Action {
  readonly type = ActionTypes.SELECT_DOCTOR;
  constructor(public payload: { id: number }) {}
}

export type Actions = LoadRequestAction | LoadFailureAction | LoadSuccessAction;
