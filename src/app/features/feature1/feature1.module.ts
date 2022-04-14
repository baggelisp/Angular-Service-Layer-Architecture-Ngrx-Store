import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature1RoutingModule } from './feature1-routing.module';
import { BasicComponent } from './containers/basic/basic.component';
import { Feature1Service } from './services/feature1.service';
import { Feature1Api } from './api/feature1.api';
import { SharedModule } from 'src/app/shared/shared.module';
import { MyTableComponent } from './components/my-table/my-table.component';


@NgModule({
  declarations: [
    BasicComponent,
    MyTableComponent
  ],
  imports: [
    CommonModule,
    Feature1RoutingModule,
    SharedModule
  ],
  providers: [
    Feature1Service,
    // Feature1Api
  ]
})
export class Feature1Module { }
