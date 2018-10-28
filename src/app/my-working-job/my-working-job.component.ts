import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-my-working-job',
  templateUrl: './my-working-job.component.html',
  styleUrls: ['./my-working-job.component.scss']
})
export class MyWorkingJobComponent implements OnInit {
  jobs = [];
  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.jobs = this.getJobsPost();
  }

  getJobsPost() {
    return this.jobService.getMyWorkingJobs(1);
  }

}
