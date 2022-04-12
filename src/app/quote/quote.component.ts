// import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
    selector: 'Quote2',
    templateUrl: './quote.component.html',                                                                                    
    styleUrls: ['./quote.component.css']
  })
  export class QuoteComponent implements OnInit {
   
    quotes:Quote[]=[
      new Quote(1,
        'Being happy never goes out of style'
        ,'Author:Lilly Pulitzer',
        new Date(2012,10,2)),
  
        new Quote(2,
          'Life is either a great adventure or nothing.',
          'Author:Hellen Keller'
          ,
          new Date(2015,10,17)),
  
          new Quote(3,
            'The time is always right to do what is right',
            'Author:Martin Luther KIng Jr',
            new Date(2010,11,12))
    
    ];
  
    toggleDet(index:any){
      this.quotes[index].showAuthor= !this.quotes[index].showAuthor
    }
  
    completeQuote(isComplete: any, index: any){
      if(isComplete){
        this.quotes.splice(index, 1)
      }
    }
  
    deleteQuote(isComplete: any,index: any){
      if (isComplete){
        let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index]}`)
      
      if(toDelete){
        this.quotes.splice(index,1)
      }
     }
    }
    //new method//
     addNewQuote(quote: any) {
       let quoteLength=this.quotes.length;
       quote.id= quoteLength +1;
       quote.completeDate= new Date(quote.completeDate);
       this.quotes.push(quote);
  
       
     }
   
    
        
      
   
      
    
  
  
  
  
    
      
    constructor(
      
    ) { }
  
    ngOnInit(): void {
    }
  
  }
  
  
  
  function i(index: number, i: any) {
    throw new Error('Function not implemented.');
  }
  
  