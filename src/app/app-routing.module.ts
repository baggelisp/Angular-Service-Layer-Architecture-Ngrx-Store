import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainSectionComponent } from './layout/components/main-section/main-section.component';

const routes: Routes = [
  {
    path: '',
    component: MainSectionComponent,
    children: [
        {
            path: 'feature1',
          loadChildren: () => import('./features/feature1/feature1-routing.module').then(m => m.Feature1RoutingModule)
        },
        {
            path: 'feature2',
          loadChildren: () => import('./features/feature2/feature2-routing.module').then(m => m.Feature2RoutingModule)
        },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
