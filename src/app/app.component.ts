import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'finals';
  
  	num1= '';
  	num2= '';
  
  onSubmit(num1:string, num2:string) {
  	this.num1 = num1;
  	this.num2 = num2;
  }
}
