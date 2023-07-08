import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

export interface Review {
  id: string;
  reviewDescription: string;
}
@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css'],
})
export class ReviewListComponent {
  reviewList = [
    { id: '2', reviewDescription: 'The Plan is not Appropriate', rating: 5 },
    { id: '3', reviewDescription: 'The Plan is Appropriate',rating:4 },
    { id: '4', reviewDescription: 'The Plan cost is not Appropriate',rating:5 },
  ]; 

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
    
  plantype = [
    {value: 'PostPaid', viewValue: 'PostPaid'},
    {value: 'PrePaid', viewValue: 'PrePaid'},
    {value: 'AddOn', viewValue: 'AddOn'}
  ];


  constructor(private formBuilder: FormBuilder) {}

  reviewForm = this.formBuilder.group({
    reviewDescription: ['', Validators.required],
    planType: ['', Validators.required],
      planName: ['', Validators.required]
  });

  addReview() {}
}
