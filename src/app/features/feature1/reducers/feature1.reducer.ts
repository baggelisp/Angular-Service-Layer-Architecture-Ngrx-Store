import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { actions } from '../actions/feature1.actions';
 
export interface State {
    loading: boolean;
    toDos: any[];
  }
  
  const initialState: State = {
    loading: false,
    toDos: [],
  };
const _feature1Reducer = createReducer(initialState,
  on(actions.loadToDos, (state) => ({
    ...state,
    loading: true,
  })),
  on(actions.loadToDosSuccess, (_state, { todos }) => ({
    loading: false,
    toDos: todos,
  })),
);
 
export function feature1Reducer(state, action) {
  return _feature1Reducer(state, action);
}


export const selectFeature1State = createFeatureSelector<any>(
    "feature1"
);

// export const selecTodosEntitiesState = createSelector(
//     selectFeature1State,
//     (state) => state
// );