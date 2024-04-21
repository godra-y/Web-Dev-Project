import { Component } from '@angular/core';
import { Router, RouterModule } from "@angular/router";
import {CommonModule} from "@angular/common";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
  constructor(private authService: AuthService, private router: Router) { }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
