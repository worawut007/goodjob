import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../services/job.service';
@Component({
  selector: 'app-detail-work',
  templateUrl: './detail-work.component.html',
  styleUrls: ['./detail-work.component.scss']
})
export class DetailWorkComponent implements OnInit {
  job: any;
  constructor(private route: ActivatedRoute, private jobService: JobService) { }

  ngOnInit() {
    const jobId = this.route.snapshot.paramMap.get('id');
    this.job = this.jobService.getJobById(jobId);
    console.log(this.job);
  }

}
