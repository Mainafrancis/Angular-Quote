//import { Quote } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input()
  quote: Quote | undefined;
  @Output() isComplete = new EventEmitter<Quote>();

  quoteDelete(complete:boolean){
    this.isComplete.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
