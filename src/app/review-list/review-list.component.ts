import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

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
  constructor(private formBuilder: FormBuilder,private http:HttpClient) {}
  reviewList: any;
  myReviewList:any;
  userId='ID0001'

  ngOnInit(){
    this.http.get(`https://localhost:7257/api/Review/reviews/alluser/${this.userId}`).subscribe(
      (data: any) => {
        this.reviewList = data;
      }
    ); 
    
  }


 
}
