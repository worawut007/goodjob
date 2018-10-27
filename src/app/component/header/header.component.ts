import { Component, OnInit } from '@angular/core';
import { DialogLoginComponent } from '../../dialog-login/dialog-login.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AuthenServic } from '../../authentication/services/authen.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

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
    private router: Router,
  ) { }
  userLogin;
  ngOnInit() {
    this.userLogin = this.authen.getAuthenticated();
  }
  openDialog(): void {
    const initialState = {
      title: 'เพิ่มรายชื่อ',
      closeBtnName: 'ยกเลิก',
      confirmBtnName: 'ยืนยัน',
    };
 this.bsModalRef = this.modalService.show(DialogLoginComponent, {
      class: 'modal-dialog-centered',
      initialState,
      animated: false,
      keyboard: true
    });

  }
  logout() {
    this.authen.clearAuthenticatied();
    this.userLogin = false;
    this.router.navigateByUrl('home');
  }

}
