import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { actions } from '../actions/feature1.actions';
import { selectTodosState } from '../reducers/feature1.reducer';

@Injectable()
export class Feature1Service {
  toDos$: Observable<any[]>;

  constructor(private store: Store) { 
    this.toDos$ = store.select(selectTodosState);
  }

  getToDos(){
    this.store.dispatch(actions.loadToDos());
  }
}
