import { createAction , props} from '@ngrx/store';

export const actions = {
    loadToDos: createAction(
        '[ToDos Page] Load ToDos'
    ),
    
    loadToDosSuccess: createAction(
        '[ToDos API] ToDos Loaded Success',
        props<{ todos: any[] }>()
    ),
}