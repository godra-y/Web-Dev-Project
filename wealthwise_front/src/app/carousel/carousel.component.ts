import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit{
  items: string[] = [
    'https://agcdn-1d97e.kxcdn.com/wp-content/uploads/2018/08/alphagamma-7-surprising-benefits-of-taking-a-career-in-finance.jpg',
    'https://addisongroup.com/wp-content/uploads/2021/12/AdobeStock_306699899-scaled.jpeg',
    'https://hypertec.com/blog/wp-content/uploads/2020/05/technology-financial-services-services-financiers.jpg'
  ];
  currentIndex = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.next();
    }, 3000); // Auto slide every 3 seconds
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
  }
}
