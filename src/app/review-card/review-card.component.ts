import { Component, Input } from '@angular/core';
import { ReviewListComponent } from '../review-list/review-list.component';
import { Review } from '../review-list/review-list.component';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css']
})
export class ReviewCardComponent {
  @Input() review = {
    id:'',
    reviewDescription:'',
    rating:0
  };
}
