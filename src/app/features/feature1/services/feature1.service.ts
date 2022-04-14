import { Injectable } from '@angular/core';

@Injectable()
export class Feature1Service {

  constructor() { }

  getToDos(){
    console.log("Service")
  }
}
