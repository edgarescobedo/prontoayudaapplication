import { Component, OnInit } from '@angular/core';

import {AuthService} from '../../../security/services/auth.service';

import {Router} from '@angular/router'

@Component({
  selector: 'header-public',
  templateUrl: './header-public.component.html',
  styleUrls: ['./header-public.component.css']
})
export class HeaderPublicComponent implements OnInit {

  constructor(public authservice:AuthService,private router:Router) { 
    
  }

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
