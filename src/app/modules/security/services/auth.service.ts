import {Injectable} from '@angular/core';

import { Router } from '@angular/router';


import * as auth0 from 'auth0-js';
@Injectable()

export class AuthService {

    auth0 = new auth0.WebAuth({
        clientID: '3j6Hvbtu9iz2YaEXjfyJcxHOFg0Btt34',
        domain: 'prontoayudatest.auth0.com',
        responseType: 'token id_token',
        audience: 'https://prontoayudatest.auth0.com/userinfo',
        redirectUri: 'http://localhost:4200/admin',
        scope: 'openid'
    });

    constructor(public router: Router) {}

    public handleAuthentication(): void {
        

        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
                
                let returnUrL = localStorage.getItem('returnUrl');
                this.router.navigate([returnUrL]);

            } else if (err) {
                this.router.navigate(['/public/login']);
                console.log(err);
            }

        });
    }

    private setSession(authResult): void {
        // Set the time that the Access Token will expire at
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    }

    login():void{
        this.auth0.authorize();
    }

    
    logout():void{
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Go back to the home route
    }

    isAuthenticated():boolean{
        //return this.authenticated;
        // Check whether the current time is past the
        // Access Token's expiry time
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }

}