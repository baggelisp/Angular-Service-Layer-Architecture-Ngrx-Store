import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectFeature1State } from '../reducers/feature1.reducer';

@Injectable()
export class Feature1Service {
  toDos$: Observable<any[]>;

  constructor(private store: Store) { 
    this.toDos$ = store.select(selectFeature1State);
    this.toDos$.subscribe(a => console.log(a))
  }

  getToDos(){
    this.store.dispatch({ type: '[ToDos Page] Load ToDos' });
  }
}
