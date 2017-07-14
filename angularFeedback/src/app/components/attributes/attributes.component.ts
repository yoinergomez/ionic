import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.css']
})
export class AttributesComponent implements OnInit {

  nameAlt:string = "This is an image of the candidate";
  pathImage:string = "assets/img/perfil-candidato.jpg";

  constructor() { }

  ngOnInit() {
  }

}
