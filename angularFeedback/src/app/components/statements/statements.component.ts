import { Component } from '@angular/core';

@Component({
  selector: 'app-statements',
  templateUrl: './statements.component.html',
  styleUrls: ['./statements.component.css']
})
export class StatementsComponent {

  show:boolean = false;
  characters:string[] = ["Wolverine", "Ciclope", "Magneto"];

  constructor() { }

  invertir(){
    this.show = !this.show;
  }

}
