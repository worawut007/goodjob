import { Component, OnInit } from '@angular/core';
import { DialogLoginComponent } from '../../dialog-login/dialog-login.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AuthenServic } from '../../authentication/services/authen.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  bsModalRef: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private authen: AuthenServic,
  ) { }
  userLogin;
  ngOnInit() {
    this.userLogin = this.authen.getAuthenticated();
  }
  openDialog(): void {
    this.bsModalRef = this.modalService.show(DialogLoginComponent, {
      class: 'modal-dialog-centered',
      animated: false,
      keyboard: true
    });
  }
  logout() {
    this.authen.clearAuthenticatied();
    this.userLogin = false;
  }

}
