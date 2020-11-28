import { ActionReducerMap } from '@ngrx/store';
import { toDoReducer } from './basic/todos.reducer';

export const reducers: ActionReducerMap<any> = {
    toDoReducer
}