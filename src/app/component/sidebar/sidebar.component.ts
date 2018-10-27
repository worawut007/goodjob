import { Component, OnInit } from '@angular/core';
import { AuthenServic } from '../../authentication/services/authen.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private authen: AuthenServic) { }
  userLogin;
  ngOnInit() {
    this.userLogin = this.authen.getAuthenticated();
  }

}
