import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import {HttpModule} from '@angular/http';


import { SecurityComponent } from './components/security.component';

import {AuthService} from './services/auth.service';
import {AuthGuardService} from './services/auth-guard.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    SecurityComponent
  ],
  bootstrap: [SecurityComponent],
  providers:[AuthService,AuthGuardService]
})
export class SecurityModule { }