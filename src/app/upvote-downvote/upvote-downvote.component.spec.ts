import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpvoteDownvoteComponent } from './upvote-downvote.component';

describe('UpvoteDownvoteComponent', () => {
  let component: UpvoteDownvoteComponent;
  let fixture: ComponentFixture<UpvoteDownvoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpvoteDownvoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpvoteDownvoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
