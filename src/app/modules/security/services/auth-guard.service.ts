import {Injectable} from '@angular/core'
import {CanActivate,CanActivateChild,Router,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router'

import {AuthService} from './auth.service'
@Injectable()

export class AuthGuardService implements CanActivate{

    constructor (private authService: AuthService,private router:Router){}

    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
       let url:string=state.url;

       return this.checkLogin(url);
    }

    checkLogin(url:string):boolean{

        if(this.authService.isAuthenticated())
        {
            //this.router.navigate(['/admin']);
            return true;
        }else
        {
            this.router.navigate(['/public/login',{ returnUrl: url }]);
            return false;
        }
        
    }


}