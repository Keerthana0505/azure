import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-review',
  templateUrl: './edit-review.component.html',
  styleUrls: ['./edit-review.component.css'],
})
export class EditReviewComponent {
  planName = [
    {
      value: 'plan1',
      viewValue: 'Plan 1',
    },
    {
      value: 'plan2',
      viewValue: 'Plan 2',
    },
    {
      value: 'plan3',
      viewValue: 'Plan 3',
    },
  ];

  plantype = [
    { value: 'PostPaid', viewValue: 'PostPaid' },
    { value: 'PrePaid', viewValue: 'PrePaid' },
    { value: 'AddOn', viewValue: 'AddOn' },
  ];

  reviewForm = this.formBuilder.group({
    id: '',
    userId: ' ',
    rating: [' ', Validators.required],
    reviewDescription: [' ', Validators.required],

    reviewDateTime: ' ',
    planType: [' ', Validators.required],
    planName: [' ', Validators.required],
  });

  reviewId: any;
  review: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((route) => {
       this.reviewId = route.get('id');

      this.http
        .get(`https://localhost:7257/api/Review/reviews/edit/${this.reviewId}`)
        .subscribe((data: any) => {
          const reviews = data;
          console.log(reviews);
          if (reviews.length > 0) {
            this.review = reviews[0];
            this.reviewForm.patchValue(this.review);
          }
        });
    });
  }

  updateReview() {
    this.http
      .put(
        `https://localhost:7257/api/Review/reviews/${this.reviewId}`,
        this.reviewForm.value
      )
      .subscribe(() => {
        console.log('Review updated successfully');
        this.router.navigate(['/myreviews']);
      });
  }
}
