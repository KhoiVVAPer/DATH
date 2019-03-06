import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router';

import { KdevSharedModule } from '@kdev/shared.module';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { LoggedGuard } from 'app/core/guards/logged.guard';
import { AuthenGuard } from 'app/core/guards/authen.guard';
import { UserGuard } from 'app/core/guards/user.guard';

const routes = [
  {
    path: '',
    loadChildren: './login/login.module#LoginModule',
    canActivate: [LoggedGuard]
  },  
  {
    path: 'teaching-calendar',
    loadChildren: './frontend-page1/frontend-page1.module#FrontendPage1Module',
    canActivate: [UserGuard]
  },
  {
    path: 'profile',
    loadChildren: './frontend-page2/frontend-page2.module#FrontendPage2Module',
    canActivate: [UserGuard]
  },
  {
    path: 'page-3',
    loadChildren: './frontend-page3/frontend-page3.module#FrontendPage3Module',
    canActivate: [UserGuard]
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    canActivate: [UserGuard]
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    KdevSharedModule
  ]
})
export class FrontendPagesModule { }
