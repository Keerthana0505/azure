import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

export interface Review{
  id: string;
  reviewDescription: string;
}
@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent {
  reviewList=[
    {id:'2',
    reviewDescription:'The Plan is not Appropriate'},
    {id:'3',
    reviewDescription:'The Plan is Appropriate'},
    {id:'4',
    reviewDescription:'The Plan cost is not Appropriate'},
  ]
  constructor(private formBuilder: FormBuilder) {}

  reviewForm = this.formBuilder.group({
    reviewDescription: ['', Validators.required],
    
  });

  addReview(){

  }
}
