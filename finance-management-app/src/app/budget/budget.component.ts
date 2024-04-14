import { Component } from '@angular/core';
import { RouterLink} from "@angular/router";
import {TopBarComponent} from "../top-bar/top-bar.component";

@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [
    RouterLink,
    TopBarComponent
  ],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.css'
})
export class BudgetComponent {

}
