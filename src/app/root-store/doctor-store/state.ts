import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Doctor } from '../../models';

export const featureAdapter: EntityAdapter<
  Doctor
> = createEntityAdapter<Doctor>({
  selectId: model => model.id,
  sortComparer: (a: Doctor, b: Doctor): number =>
    b.id.toString().localeCompare(a.id)
});

export interface State extends EntityState<Doctor> {
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = featureAdapter.getInitialState(
  {
    isLoading: false,
    error: null
  }
);
