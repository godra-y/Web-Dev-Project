import { Component } from '@angular/core';
import {TopBarComponent} from "../top-bar/top-bar.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {CarouselComponent} from "../carousel/carousel.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    TopBarComponent,
    CarouselComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
