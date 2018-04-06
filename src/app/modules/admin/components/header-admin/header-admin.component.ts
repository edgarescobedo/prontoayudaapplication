import { Component, OnInit } from '@angular/core';

import {AuthService} from '../../../security/services/auth.service';

import {Router} from '@angular/router'

@Component({
  selector: 'header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {

  constructor(public authservice:AuthService,private router:Router) { }

  ngOnInit() {
  }

  login():void{
    this.authservice.login();
  }

  logout():void{
    this.authservice.logout();
    this.router.navigate(['/public']);
  }

}
