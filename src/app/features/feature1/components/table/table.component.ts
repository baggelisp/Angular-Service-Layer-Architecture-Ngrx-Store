import { Component, Input, OnInit } from '@angular/core';

interface TodoInt {
  id: number,
  userId: string,
  title: string,
  completed: boolean
}


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() todos: TodoInt[] = []; 
  
  constructor() { }

  ngOnInit(): void {
  }

}
