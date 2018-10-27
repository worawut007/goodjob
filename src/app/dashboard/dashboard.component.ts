import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { CreateJobComponent } from '../create-job/create-job.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  public openModalWithComponent() {
    /* this is how we open a Modal Component from another component */
    this.bsModalRef = this.modalService.show(CreateJobComponent, {class: 'modal-lg'});
  }
}
