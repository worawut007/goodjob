import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AuthenServic } from '../authentication/services/authen.service';
import { AccountServices } from '../services/account.services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertServices } from '../services/alert.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.scss']
})
export class DialogLoginComponent implements OnInit {
  public afterClose: Subject<object>;
  constructor(
    private account: AccountServices,
    private authen: AuthenServic,
    private alert: AlertServices,
    public bsModalRef: BsModalRef,
    private builder: FormBuilder,
    private router: Router,
  ) {
    this.initialCreatFormData();
  }
  form: FormGroup;
  ngOnInit() {
  }
  exitModal() {
    this.bsModalRef.hide();
  }
  // เข้าสู่ระบบ
  onSubmit(): void {
    this.account
      .onLogin(this.form.value)
      .then(res => {
        // เก็บ access Token
        this.alert.notifly('เข้าสู่ระบบสำเร็จ', 'info');
        this.authen.setAuthenticated(res.accessToken);
        this.refresh();
        this.bsModalRef.hide();
        // this.router.initialNavigation();
        // alert และ redirect หน้า page
      })
      .catch(err => this.alert.notifly(err.Message));

  }
  refresh() {
    window.location.reload();
}

  private initialCreatFormData() {
    this.form = this.builder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}

