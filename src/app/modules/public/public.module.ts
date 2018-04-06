import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { RootPublicComponent } from './components/root-public/root-public.component';
import { HeaderPublicComponent } from './components/header-public/header-public.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AboutComponent } from './components/about/about.component';

import { PublicRoutingModule } from './public-routing.module';


@NgModule({
  
  imports: [
    BrowserModule,
    PublicRoutingModule
  ],
  declarations: [
    RootPublicComponent,
    HeaderPublicComponent,
    WelcomeComponent,
    AboutComponent
  ],
  exports: [
    RootPublicComponent
  ],
  bootstrap: [RootPublicComponent]
})
export class PublicModule { }
