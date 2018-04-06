import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

//Import Components 
import {WelcomeComponent} from './components/welcome/welcome.component';
import {AboutComponent} from './components/about/about.component';
import {SecurityComponent} from '../security/components/security.component';
import {RootPublicComponent} from './components/root-public/root-public.component';

const routes: Routes = [
    { 
        path: 'public',  component: RootPublicComponent ,
        children:[
            {
                path:'',
                component:WelcomeComponent,
            },
            {
                path:'welcome',
                component:WelcomeComponent
            },
            {
                path:'about',
                component:AboutComponent
            },
            {
                path:'login',
                component:SecurityComponent
            },
            
        ]
    }
  ];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class PublicRoutingModule{}