import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent {
  name:string = "Esteban";
  num:number = 4;

  constructor() { }

  /**
   * Change the variable name of this class.
   * 
   * Created on 13/jul/2017
   * @author Yoiner Gómez
   * @version v1.0
   */
  changeName(){
    this.name = (this.name=='Yoiner')?"Esteban":"Yoiner";
  }

}
