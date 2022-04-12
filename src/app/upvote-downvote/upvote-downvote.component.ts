import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upvote-downvote',
  templateUrl: './upvote-downvote.component.html',
  styleUrls: ['./upvote-downvote.component.css']
})
export class UpvoteDownvoteComponent implements OnInit {
  numberOfVotes: number= 0;
  upvoteButtonClick(){
    this.numberOfVotes++;

  }

  
  downvoteButtonClick(){
    this.numberOfVotes--;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
