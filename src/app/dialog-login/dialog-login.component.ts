import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AuthenServic } from '../authentication/services/authen.service';
import { AccountServices } from '../services/account.services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.scss']
})
export class DialogLoginComponent implements OnInit {

  constructor(
    private account: AccountServices,
    private authen: AuthenServic,
    public bsModalRef: BsModalRef,
    private builder: FormBuilder,
  ) { this.initialCreatFormData();
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
        //เก็บ access Token 
        this.authen.setAuthenticated(res.accessToken)
        this.bsModalRef.hide();
        //alert และ redirect หน้า page 
        // this.alert.notifly('เข้าสู่ระบบสำเร็จ', 'info')
        // this.router.navigate(['/', AppURL.Authen, AuthURL.Dashboard])
      })
      //.catch(err => this.alert.notifly(err.Message));

  }

  private initialCreatFormData() {
    this.form = this.builder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}

