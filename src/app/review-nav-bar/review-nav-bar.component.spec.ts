import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewNavBarComponent } from './review-nav-bar.component';

describe('ReviewNavBarComponent', () => {
  let component: ReviewNavBarComponent;
  let fixture: ComponentFixture<ReviewNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewNavBarComponent]
    });
    fixture = TestBed.createComponent(ReviewNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
