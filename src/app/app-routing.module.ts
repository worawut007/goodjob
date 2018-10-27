import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MailInboxComponent } from './mail/mail-inbox/mail-inbox.component';
import { ProfileComponent } from './profile/profile/profile.component';

const routes: Routes = [
    {
      path: '',
      loadChildren: './dashboard/dashboard.module#DashboardModule',
    },
    {
      path: 'mail',
      component: MailInboxComponent,
    },
    {
      path: 'profile',
      component: ProfileComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
