import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KdevSharedModule } from '@kdev/shared.module';
import { KdevHighlightModule } from '@kdev/components';

import { HomeComponent } from './home.component';
import { ClassComponent } from 'app/layout/components/class/class.component';

const routes: Routes = [ 
  {
    path: '**', 
    component: HomeComponent
  }
];

@NgModule({
  declarations: [HomeComponent,ClassComponent],
  imports: [
    RouterModule.forChild(routes),
    KdevSharedModule,
    KdevHighlightModule,
  ]
})
export class HomeModule { }
