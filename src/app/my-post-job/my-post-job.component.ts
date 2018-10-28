import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-my-post-job',
  templateUrl: './my-post-job.component.html',
  styleUrls: ['./my-post-job.component.scss']
})
export class MyPostJobComponent implements OnInit {
  jobs = [];
  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.jobs = this.getJobs();
  }

  getJobs() {
    return this.jobService.getMyPostJobs(2);
  }

}
