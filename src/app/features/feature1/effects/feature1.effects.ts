import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Feature1Api } from '../api/feature1.api';
 
@Injectable()
export class Feature1Effects {
 
  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType('[ToDos Page] Load ToDos'),
    mergeMap(() => this.api.getToDo()
      .pipe(
        map(todos => ({ type: '[ToDos API] ToDos Loaded Success', payload: todos })),
        catchError(() => EMPTY)
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private api: Feature1Api
  ) {}
}