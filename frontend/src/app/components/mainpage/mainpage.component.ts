import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.sass']
})
export class MainPageComponent {
  isAuthentificated: boolean = false;

  constructor(private _auth: AuthService) {}
}
