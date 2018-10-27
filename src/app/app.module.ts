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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MailInboxComponent,
    ProfileComponent,
    DetailWorkComponent,
    DialogLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  entryComponents: [DialogLoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
