import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  username: string = "";
  email: string = "";
  password: string = "";

  constructor(private router: Router, private authService: AuthService) {}

  signup() {
    this.authService.signup(this.username, this.email, this.password)
      .subscribe(
        (data) => {
          this.router.navigate(['/login']);
        },
        (error) => {
          alert('Registration failed. Please try again.');
        }
      );
  }
}
