import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { ReviewCardComponent } from './review-card/review-card.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { ReviewFormComponent } from './review-form/review-form.component';
import { RouterModule, Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { UserReviewCardComponent } from './user-review-card/user-review-card.component';
import { MyReviewListComponent } from './my-review-list/my-review-list.component';
import { ReviewNavBarComponent } from './review-nav-bar/review-nav-bar.component';
import { EditReviewComponent } from './edit-review/edit-review.component';




const routes: Routes = [
  
  { path: 'addreview', component: ReviewFormComponent },
  {path:'reviews',component:ReviewListComponent},
  {path:'myreviews',component:MyReviewListComponent},
  {path:'reviews/edit/:id',component:EditReviewComponent}
 
];

@NgModule({
  declarations: [
    AppComponent,
    ReviewListComponent,
    ReviewCardComponent,
    ReviewFormComponent,
    UserReviewCardComponent,
    MyReviewListComponent,
    ReviewNavBarComponent,
    EditReviewComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,RouterModule.forRoot(routes),
    AppRoutingModule,MatButtonModule,MatFormFieldModule,MatInputModule,ReactiveFormsModule,FormsModule,MatIconModule,MatToolbarModule,
    MatOptionModule,MatSelectModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
