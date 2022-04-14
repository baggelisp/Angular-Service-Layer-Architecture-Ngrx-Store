import { Component, OnInit } from '@angular/core';
import { Feature1Service } from '../../services/feature1.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  constructor(public service: Feature1Service) { }

  ngOnInit(): void {
  }


}
