import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature2RoutingModule } from './feature2-routing.module';
import { Feature2Component } from './feature2.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [Feature2Component],
  imports: [
    CommonModule,
    Feature2RoutingModule,
    SharedModule
  ]
})
export class Feature2Module { }
