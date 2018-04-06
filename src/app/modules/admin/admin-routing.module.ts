import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {AuthGuardService} from '../security/services/auth-guard.service';
//Import Components 
import {RootAdminComponent} from './components/root-admin/root-admin.component';
import {InfoComponent} from './components/info/info.component';
import {UsersComponent} from './components/users/users.component';

  const routes: Routes = [
    { 
        path: 'admin',  component: RootAdminComponent ,canActivate:[AuthGuardService],
        children:[
            {
                path:'',
                canActivate: [AuthGuardService],
                component:UsersComponent,
            },
            {
                path:'users',
                canActivate: [AuthGuardService],
                component:UsersComponent
            },
            {
                path:'info',
                canActivate: [AuthGuardService],
                component:InfoComponent
            },
            
        ]
    }
    
  ];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class AdminRoutingModule{}