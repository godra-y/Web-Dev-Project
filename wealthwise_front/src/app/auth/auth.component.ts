import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  logged: boolean = false;
  username: string = "";
  password: string = "";

  constructor(private router: Router, private authService: AuthService) {}

  login() {
    this.authService
      .login(this.username, this.password)
      .subscribe((data) => {
          this.logged = true;
          localStorage.setItem("access", data.access);
          localStorage.setItem("refresh", data.refresh);
          this.router.navigate(['/home']);
        },
        (error) => {
          alert('Invalid username or password. Please try again.');
        }
      )
  }
}
