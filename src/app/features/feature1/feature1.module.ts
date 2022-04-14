import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature1RoutingModule } from './feature1-routing.module';
import { TableComponent } from './components/table/table.component';
import { BasicComponent } from './containers/basic/basic.component';


@NgModule({
  declarations: [
    TableComponent,
    BasicComponent
  ],
  imports: [
    CommonModule,
    Feature1RoutingModule
  ]
})
export class Feature1Module { }
