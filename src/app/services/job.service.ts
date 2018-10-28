import { Injectable } from '@angular/core';
import { dataJob } from './mock-data-job';
@Injectable({
  providedIn: 'root'
})
export class JobService {
  private jobs = dataJob;
  constructor() { }

  getJobs() {
    return this.jobs;
  }

  getMyPostJobs(id) {
    // tslint:disable-next-line:prefer-const
    let getData = [];
    for (let i = 0; i < this.jobs.length; i++) {
      if (this.jobs[i].id === 2) { // Moc data id 2 is Post job this is like user from login
        getData.push(this.jobs[i]);
      }
    }
    return getData;
  }

  getMyWorkingJobs(id) {
    // tslint:disable-next-line:prefer-const
    let getData = [];
    for (let i = 0; i < this.jobs.length; i++) {
      if (this.jobs[i].id === 1) { // Moc data id 1 is working jobs this is like user from login
        getData.push(this.jobs[i]);
      }
    }
    return getData;
  }

  getJobById(id) {
    return this.jobs.find((job) => {
      // tslint:disable-next-line:triple-equals
      return job.id == id;
    });
  }

  addJob(data) {
    this.jobs.push(data);
  }
}
