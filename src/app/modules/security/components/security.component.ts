import { Component, OnInit } from '@angular/core';

import {Router,ActivatedRouteSnapshot,RouterStateSnapshot,ActivatedRoute,Params} from '@angular/router'

import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  private returnUrl:string;

  constructor(private authservice:AuthService,
              private router:Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.returnUrl = params['returnUrl'];
    });
  }


  login():void{

    this.authservice.login();

    if( typeof this.returnUrl !== "undefined") {
      localStorage.setItem('returnUrl', this.returnUrl);
      //this.router.navigate([this.returnUrl]);
    }else
    {
      localStorage.setItem('returnUrl', this.returnUrl);
      //this.router.navigate(["/public"]);
    }
  }

  logout():void{
    this.authservice.logout();
    this.router.navigate(["/public"]);
  }


}
