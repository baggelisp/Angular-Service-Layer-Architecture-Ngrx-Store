import { ActionReducerMap } from '@ngrx/store';
import { toDoReducer } from './_features/basic/todos.reducer';

export const reducers: ActionReducerMap<any> = {
    toDoReducer
}