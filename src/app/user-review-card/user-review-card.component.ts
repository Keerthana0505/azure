import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-review-card',
  templateUrl: './user-review-card.component.html',
  styleUrls: ['./user-review-card.component.css']
})
export class UserReviewCardComponent {
  constructor(private http: HttpClient,private router:Router) {}
  
  
  @Output() delete = new EventEmitter<string>();
  @Input() review = {
    id: '',
    planName: '',
    planType: '',
    rating: 0,
    reviewDateTime: '',
    reviewDescription: '',
    userId: '',
  };
  UserId='ID0001'
  getStarsArray(rating: number): number[] {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const starsArray = Array(fullStars).fill(1);
    
    if (hasHalfStar) {
      starsArray.push(0.5);
    }
    
    return starsArray;
  }

  editReview(id:string){
    this.router.navigate(['/reviews/edit', id]);
  }
  delReview(id: string) {
    this.delete.emit(id);
  }
  
}
