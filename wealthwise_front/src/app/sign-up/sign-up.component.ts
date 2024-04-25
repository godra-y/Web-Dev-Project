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
  isSignIn: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  toggleSignIn(isSignUpSelected: boolean): void {
    this.isSignIn = isSignUpSelected;
  }

  signup(): void {
    this.authService.signup(this.username, this.email, this.password).subscribe({
      next: (user) => {
        this.router.navigate(['/login']);
        this.toggleSignIn(false);
      },
      error: (error) => {
        alert('Registration failed. Please try again.');
      }
    });
  }
}
