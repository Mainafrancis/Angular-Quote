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
        'Monotony leads to poverty.Take a chance and eradicate it'
        ,'Author:Andile',
        new Date(20122,10,4)),
  
        new Quote(2,
          'Always Shine as Bright as Diamond. You are always meant to embrace your glory.',
          'Author:Lucy'
          ,
          new Date(2022,10,4)),
  
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
  
  