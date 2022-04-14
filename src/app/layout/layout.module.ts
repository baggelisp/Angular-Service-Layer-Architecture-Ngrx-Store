import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MainSectionComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    MainSectionComponent,
  ]
})
export class LayoutModule { }
