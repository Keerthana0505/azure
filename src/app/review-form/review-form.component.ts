import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent {

  constructor(private formBuilder: FormBuilder,private http:HttpClient) {}

  

  planName=[
    {
      value:'plan1',viewValue:'Plan 1'
    },
    {
      value:'plan2',viewValue:'Plan 2'
    },
    {
      value:'plan3',viewValue:'Plan 3'
    }
  ]
    
  plantype = [
    {value: 'PostPaid', viewValue: 'PostPaid'},
    {value: 'PrePaid', viewValue: 'PrePaid'},
    {value: 'AddOn', viewValue: 'AddOn'}
  ];


  

  reviewForm = this.formBuilder.group({
    reviewDescription: ['', Validators.required],
    rating:['',Validators.required],
     planType: ['', Validators.required],
      planName: ['', Validators.required]
  });

  addReview() {
    this.http.post(`https://localhost:7257/api/Review`, this.reviewForm.value)
    .subscribe();
  }

}
