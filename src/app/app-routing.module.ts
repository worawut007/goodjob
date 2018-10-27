import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailWorkComponent } from './detail-work/detail-work.component';

const routes: Routes = [
    {
      path: '',
      loadChildren: './dashboard/dashboard.module#DashboardModule',
    },
    {
      path: 'job-description',
      component: DetailWorkComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
