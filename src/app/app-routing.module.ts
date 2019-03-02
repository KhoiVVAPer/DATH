import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/frontend-pages/frontend-pages.module#FrontendPagesModule'
  },
  {
    path: 'admin',
    loadChildren: './pages/backend-pages/backend-pages.module#BackendPagesModule'
  },
  {
    path: '**',
    redirectTo: ''
  }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
