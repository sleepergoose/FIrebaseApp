import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.sass']
})
export class MainPageComponent implements OnInit {
  isAuthentificated: boolean = false;

  constructor(private _auth: AuthService) {}

  ngOnInit() {
    this.isAuthentificated = this._auth.isAuthentificated;

    this._auth.authUser$
      .subscribe((user) => {
        this.isAuthentificated = (user !== null);
      });
  }
}
