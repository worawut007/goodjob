import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MailInboxComponent } from './mail/mail-inbox/mail-inbox.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { DetailWorkComponent } from './detail-work/detail-work.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyJobComponent } from './my-job/my-job.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';

const routes: Routes = [
  {
    path: 'index',
    component: DashboardComponent,
  },
  {
    path: 'mail',
    component: MailInboxComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'job-description/:id',
    component: DetailWorkComponent
  },
  {
    path: 'my-job',
    component: MyJobComponent
  },
  {
    path: 'manage-employee',
    component: ManageEmployeeComponent
  },
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
