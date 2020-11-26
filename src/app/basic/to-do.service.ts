import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Store, select } from '@ngrx/store';



@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  public readonly todos$: Observable<any[]>;

  constructor(private store: Store<any>,private api: ApiService) { 
    // this.todos$ = this.store.select('todoReducer');
  }

  getToDos(){
    this.api.getToDo()
    .pipe()
      .subscribe((data: any[])=> {
        // this.store.dispatch({ type: ADD_TODO, payload: { data, done: false } });
      });
  }
}
