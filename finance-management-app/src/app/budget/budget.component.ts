import { Component } from '@angular/core';
import { RouterLink} from "@angular/router";

@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.css'
})
export class BudgetComponent {

}
