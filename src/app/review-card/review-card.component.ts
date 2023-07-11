import { Component, Input } from '@angular/core';
import { ReviewListComponent } from '../review-list/review-list.component';
import { Review } from '../review-list/review-list.component';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css'],
})
export class ReviewCardComponent {
  @Input() review = {
    id: '',
    planName: '',
    planType: '',
    rating: 0,
    reviewDateTime: '',
    reviewDescription: '',
    userId: '',
  };
  getStarsArray(rating: number): number[] {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const starsArray = Array(fullStars).fill(1);
    
    if (hasHalfStar) {
      starsArray.push(0.5);
    }
    
    return starsArray;
  }
  
  
}
