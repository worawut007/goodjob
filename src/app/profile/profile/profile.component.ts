import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  createProfileForm: FormGroup;
  constructor() {}
  count = 0;
  disabled = true;
  buttonEdit = {
    text: 'แก้ไขโปรไฟล์',
    status: true,
  };

  profile = {
    name: 'worawut sangangam',
    age: 22,
    phone: '084-3327198',
    email: 'boyjam1@hotmail.com',
    address: 'Burapha',
    sex: 'ชาย',
  };

  ngOnInit() {
    this.createProfileForm = new FormGroup({
      'name': new FormControl('worawut sangangam'),
      'age': new FormControl('22'),
      'phone': new FormControl('084-3327198'),
      'email': new FormControl('boyjam1@hotmail.com'),
      'address': new FormControl('Burapha'),
      'gender': new FormControl('ชาย'),
    });
  }

  unDisabled(check) {
     this.count += 1;
    if (this.count === 1) {
      this.disabled = false;
      this.buttonEdit.text = 'ยกเลิก';
      this.buttonEdit.status = false;
      check = false;
    } else {
      // กรณียกเลิกการแก้ไขโปรไฟล์
      this.disabled = true;
      this.buttonEdit.text = 'แก้ไขโปรไฟล์';
      this.buttonEdit.status = true;
      this.count = 0;
      this.ngOnInit();
    }
  }

  saveProfile() {

  }

}
