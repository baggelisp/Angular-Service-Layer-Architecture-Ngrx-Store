import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Feature1Api {

  configUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getToDo(){
    return this.http.get(this.configUrl + '/todos');
  }
}
