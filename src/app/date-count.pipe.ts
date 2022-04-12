import { DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value:any){
    let today:Date=new Date;
    let todayTime:any= new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDay(),
    )
  }
   

}
