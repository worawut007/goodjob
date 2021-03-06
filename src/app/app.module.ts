import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { MailInboxComponent } from './mail/mail-inbox/mail-inbox.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { DetailWorkComponent } from './detail-work/detail-work.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogLoginComponent } from './dialog-login/dialog-login.component';

import { CreateJobComponent } from './create-job/create-job.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyJobComponent } from './my-job/my-job.component';
import { JobService } from './services/job.service';
import { AlertServices } from './services/alert.service';
import { ValidatorsService} from './services/validators.services';

import { DialogChangPasswordComponent } from './dialog-chang-password/dialog-chang-password.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { DialogRegisterComponent} from './dialog-register/dialog-register.component';
import { MyPostJobComponent } from './my-post-job/my-post-job.component';
import { MyWorkingJobComponent } from './my-working-job/my-working-job.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MailInboxComponent,
    ProfileComponent,
    DetailWorkComponent,
    DialogLoginComponent,
    CreateJobComponent,
    DashboardComponent,
    MyJobComponent,
    DialogChangPasswordComponent,
    ManageEmployeeComponent,
    DialogRegisterComponent,
    MyPostJobComponent,
    MyWorkingJobComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ],
  providers: [
    JobService,
    AlertServices,
    ValidatorsService
  ],
  entryComponents: [
    CreateJobComponent,
    DialogLoginComponent,
    DialogChangPasswordComponent,
    DialogRegisterComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
