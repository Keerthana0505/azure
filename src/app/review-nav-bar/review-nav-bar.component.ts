import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-review-nav-bar',
  templateUrl: './review-nav-bar.component.html',
  styleUrls: ['./review-nav-bar.component.css']
})
export class ReviewNavBarComponent {
  constructor(public router: Router) {}
  addReview(){
    this.router.navigate(['/addreview'])
  }
  allReviews(){
    this.router.navigate(['/reviews'])
  }
  myReviews(){
    this.router.navigate(['/myreviews'])
  }

}
