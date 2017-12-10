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
      console.log(user); 
      this.authService.setUser(user as User);
      this.router.navigate(['/']);
    }, (err) => {
      if (err.status === 403) {
        this.error = true;
      }
    });
  }

}
