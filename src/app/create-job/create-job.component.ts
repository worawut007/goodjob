import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.scss']
})
export class CreateJobComponent implements OnInit {
  createJobForm: FormGroup;
  constructor(public bsModalRef: BsModalRef, private jobService: JobService) {

  }

  ngOnInit() {
    this.createJobForm = new FormGroup({
      'name': new FormControl(''),
      'userOwner': new FormControl('Worawut Sangangam'),
      'jobStatus': new FormControl('เปิดรับคนอยู่'),
      'address': new FormControl(''),
      'price': new FormControl(''),
      'jobType': new FormControl('บาท/ชั่วโมง'),
      'worker': new FormControl([]),
      'genderCondition': new FormControl(''),
      'beginAge': new FormControl(''),
      'endAge': new FormControl(''),
      'workerAmount': new FormControl(''),
      'description': new FormControl(''),
      'createDate': new FormControl(Date.now()),
      'startDate': new FormControl(''),
      'endDate': new FormControl(''),
    });
  }

  createJob() {
    this.jobService.addJob(this.createJobForm.value);
    this.bsModalRef.hide();
  }
}
