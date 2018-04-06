import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { RootComponent } from './components/root/root.component';

import {HttpModule} from '@angular/http';

//Imports modules
import {AdminModule} from './modules/admin/admin.module';
import {PublicModule} from './modules/public/public.module';
import {SecurityModule} from './modules/security/security.module';

//Import Routing File
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    AdminModule,
    PublicModule,
    SecurityModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }


