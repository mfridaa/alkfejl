import { Component, OnInit } from '@angular/core';
import { Orders } from './classes/orders';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { User } from './classes/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent implements OnInit {
  public constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.syncLoginStatus();
  }

  private logout() {
    this.authService.logout();
  }

  public title: string = 'Webshop';
}
