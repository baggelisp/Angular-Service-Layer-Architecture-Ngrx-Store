import { Component, Input, OnInit } from '@angular/core';

interface TodoInt {
  id: number,
  userId: string,
  title: string,
  completed: boolean
}


@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.scss']
})
export class MyTableComponent implements OnInit {

  @Input() todos: TodoInt[] = []; 
  
  constructor() { }

  ngOnInit(): void {
  }

}
