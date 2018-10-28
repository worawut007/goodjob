import { Component, OnInit } from '@angular/core';
import { AuthenServic } from '../../authentication/services/authen.service';
import { AccountServices} from '../../services/account.services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private authen: AuthenServic,
    private account: AccountServices) { }
  userLogin;
  user;
  ngOnInit() {
    
    this.account.getUserLogin(this.authen.getAuthenticated()).then( result => { this.user = result;
    this.userLogin = this.authen.getAuthenticated();

    });
  }
  }


