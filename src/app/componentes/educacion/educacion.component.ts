import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  public imagenp:string="./assets/APLogo.png";
  public Titulo:string="Foto de logo";

  constructor() { }

  ngOnInit(): void {
  }

}
