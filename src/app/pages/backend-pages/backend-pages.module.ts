import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { KdevSharedModule } from '@kdev/shared.module';
import { AuthenGuard } from 'app/core/guards/authen.guard';
import { AdminGuard } from 'app/core/guards/admin.guard';

const routes = [
  {
    path: 'page-1',
    loadChildren: './backend-page1/backend-page1.module#BackendPage1Module',
    canActivate: [AdminGuard]
  },
  {
    path: 'page-2',
    loadChildren: './backend-page2/backend-page2.module#BackendPage2Module',
    canActivate: [AdminGuard]
  },
  {
    path: 'page-3',
    loadChildren: './backend-page3/backend-page3.module#BackendPage3Module',
    canActivate: [AdminGuard]
  },
  {
    path: 'page-4',
    loadChildren: './folder/backend-page4/backend-page4.module#BackendPage4Module',
    canActivate: [AdminGuard]
  },
  {
    path: 'page-5',
    loadChildren: './folder/backend-page5/backend-page5.module#BackendPage5Module',
    canActivate: [AdminGuard]
  },
  {
    path: 'page-6',
    loadChildren: './folder/backend-page6/backend-page6.module#BackendPage6Module',
    canActivate: [AdminGuard]
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule',
    canActivate: [AdminGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    KdevSharedModule
  ]
})
export class BackendPagesModule { }
