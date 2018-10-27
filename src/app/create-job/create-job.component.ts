import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.scss']
})
export class CreateJobComponent implements OnInit {
  createJobForm: FormGroup;
  constructor(public bsModalRef: BsModalRef) {

  }

  ngOnInit() {
    this.createJobForm = new FormGroup({
      'title': new FormControl('sdfdssf'),
      'price': new FormControl(''),
      'startDate': new FormControl(''),
      'endDate': new FormControl(''),
    });
  }

  createJob() {
    console.log(this.createJobForm.value);
    this.bsModalRef.hide();
  }
}
