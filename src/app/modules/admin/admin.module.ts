import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { RootAdminComponent } from './components/root-admin/root-admin.component';
import { UsersComponent } from './components/users/users.component';
import { InfoComponent } from './components/info/info.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { LeftColumnComponent } from './components/left-column/left-column.component';

import {AdminRoutingModule} from './admin-routing.module';

import {AuthService} from '../security/services/auth.service';

import {AuthGuardService} from '../security/services/auth-guard.service';


@NgModule({
  imports: [
    BrowserModule,
    AdminRoutingModule
  ],
  declarations: [
    RootAdminComponent,
    UsersComponent,
    InfoComponent,
    HeaderAdminComponent,
    LeftColumnComponent
  ],
  providers:[AuthService,AuthGuardService],
  bootstrap: [RootAdminComponent]
})
export class AdminModule { }
