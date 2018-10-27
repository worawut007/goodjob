import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { CreateJobComponent } from '../create-job/create-job.component';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  bsModalRef: BsModalRef;
  jobs = [];

  constructor(private modalService: BsModalService, private jobService: JobService) { }

  ngOnInit() {
    this.jobs = this.getJobsPost();
  }
  getJobsPost() {
    return this.jobService.getJobs();
  }
  openModalWithComponent() {
    this.bsModalRef = this.modalService.show(CreateJobComponent, { class: 'modal-lg' });
  }
}
