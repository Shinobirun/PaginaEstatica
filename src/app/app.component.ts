import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo:string;
  texto:string;
  nro?:number;   //es que es un numero o es null
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'porfolio1';
  public ArregloTarjetas: Tarjeta[] = [];

  ngOnInit():void {
    this.ArregloTarjetas= [
      {titulo:'imagenp', texto:'texto'},
      {titulo:'imagenp', texto:'este es mi texto'},
      {titulo:'imagenp', texto:'este es mi texto'},
    ];
  }
}
