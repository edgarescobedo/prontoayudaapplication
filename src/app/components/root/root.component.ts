import { Component } from '@angular/core';

import {AuthService} from '../../modules/security/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent {
  title = 'app';

  constructor(public authservice:AuthService){
    authservice.handleAuthentication();
  }
}
