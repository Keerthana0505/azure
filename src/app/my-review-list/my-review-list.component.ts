import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { catchError, concatMap, throwError } from 'rxjs';

@Component({
  selector: 'app-my-review-list',
  templateUrl: './my-review-list.component.html',
  styleUrls: ['./my-review-list.component.css']
})
export class MyReviewListComponent {
  constructor(private formBuilder: FormBuilder,private http:HttpClient) {}
  myReviewList$:any;
  userId='ID0001'

  ngOnInit(){
  this.myReviewList$=this.getReview();
}

getReview(){
  console.log("get");
  
 return this.http.get(`https://localhost:7257/api/Review/reviews/${this.userId}`).pipe(
    catchError((error: any) => {
     
      console.error('An error occurred:', error);
      return throwError('Something went wrong');
    })
  )

}

delgetReview(id: string) {
  this.myReviewList$ = this.deleteReview(id).pipe(
    concatMap(() => this.getReview())
  );
}

deleteReview(id: string) {
  return this.http.delete(`https://localhost:7257/api/Review/reviews/${id}`);
}

}




