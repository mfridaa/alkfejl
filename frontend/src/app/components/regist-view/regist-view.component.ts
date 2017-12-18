import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../classes/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regist-view',
  templateUrl: './regist-view.component.html',
  styleUrls: ['./regist-view.component.css'],
  providers: [AuthService]
})
export class RegistViewComponent implements OnInit {
  private error: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  private tryRegist(username: string, password: string): void {
    this.authService.regist(username, password).subscribe((user) => {
      this.authService.setUser(user as User);
      this.router.navigate(['/login']);
      this.error = false;
    }, (err) => {
      if (err.status === 400) {
        this.error = true;
      }
    });
  }

}
