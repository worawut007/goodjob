import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AuthenServic } from '../authentication/services/authen.service';
import { AccountServices } from '../services/account.services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorsService} from '../services/validators.services';
import { AlertServices} from '../services/alert.service';

@Component({
  selector: 'app-dialog-register',
  templateUrl: './dialog-register.component.html',
  styleUrls: ['./dialog-register.component.scss']
})
export class DialogRegisterComponent implements OnInit {

  constructor(
    private account: AccountServices,
    private authen: AuthenServic,
    public bsModalRef: BsModalRef,
    private builder: FormBuilder,
    private validators: ValidatorsService,
    private alert: AlertServices,

  ) { this.intialCreatFormData();
  }
  data;
  form: FormGroup;
    ngOnInit() {
  }
  private intialCreatFormData() {
    
    this.form = this.builder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      tel: ['', [Validators.required]],
      birthdate: ['', Validators.required],
      sex: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,this.validators.isPassword]],
      cpassword: ['', [Validators.required,this.validators.comparePassword('password')]], 
    });
  }
  onSubmit() {
    console.log(this.form.value)
    if (this.form.invalid) 
      return this.alert.somting_wrong();
    //ส่งข้อมูลหา Server 
    this.account
      .onRegister(this.form.value)
      .then(res => {
        this.alert.notifly('ลงทะเบียนสำเร็จ', 'info');
        this.data ={ email: this.form.value.email,
                password: this.form.value.password }
          this.account.onLogin(this.data)
      this.bsModalRef.hide();
      })
      .catch(err => this.alert.notifly(err.Message));

  }

}
