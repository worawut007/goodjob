import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountServices } from '../services/account.services';
import { AuthenServic } from '../authentication/services/authen.service';

@Component({
  selector: 'app-dialog-chang-password',
  templateUrl: './dialog-chang-password.component.html',
  styleUrls: ['./dialog-chang-password.component.scss']
})
export class DialogChangPasswordComponent implements OnInit {

  constructor(
    private account: AccountServices,
    private authen: AuthenServic,
    public bsModalRef: BsModalRef,
    private builder: FormBuilder,
  ) {
    this.initialCreatFormData();
  }
  form: FormGroup;

  ngOnInit() {
  }

  exitModal() {
    this.bsModalRef.hide();
  }

  private initialCreatFormData() {
    this.form = this.builder.group({
      passwordOld: ['', Validators.required],
      passwordNew: ['', Validators.required],
      conPassword: ['', Validators.required],
    });
  }


}
