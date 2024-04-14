import { Component } from '@angular/core';
import { Router, RouterModule } from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
}
