import { Component } from '@angular/core';
import {SpotifyService} from './services/spotify.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  columnDefs;
  rowData;
  data2:any[]=[];

  constructor(public _spotify: SpotifyService) {
    this._spotify.getArtistas().then( valido =>{
      if(valido){
        this.data2 = this._spotify.data;
        console.log(this.data2);
      }else{
        console.log("No hay Artistas");
      }
    }).catch(error =>{
      console.log("Error al obtener los artistas " +error);
    });

    this.columnDefs = [
      {headerName: "ID", field: "id", width: 300},
      {headerName: "NAME", field: "name", width: 300},
      {headerName: "PHONE", field: "phone", width: 300},
      {headerName: "USERNAME", field: "username", width: 300},
      {headerName: "WEBSITE", field: "website", width: 300},
      {headerName: "EMAIL", field: "email", width: 300},
      {headerName: "COMPANY", field: "company.name", width: 300},
      {headerName: "NAME", field: "name", width: 300},
      {headerName: "PHONE", field: "phone", width: 300}
    ];

    this.rowData = [
      {marca: "Toyota", modelo: "Celica", precio: 35000},
      {marca: "Ford", modelo: "Mondeo", precio: 32000},
      {marca: "Porsche", modelo: "Boxter", precio: 72000},
      {marca: "Ferrari", modelo: "California T", precio: 172000},
      {marca: "Ferrari", modelo: "Portofino", precio: 152000},
      {marca: "Aston Martin", modelo: "DB9", precio: 120000},
      {marca: "Audi", modelo: "A4", precio: 676000},
      {marca: "BMW", modelo: "Serie1", precio: 62000},
      {marca: "BMW", modelo: "Serie2 T", precio: 175000},
      {marca: "BMW", modelo: "Serie3", precio: 142000},
      {marca: "Bugatti", modelo: "Chiron", precio: 110000},
      {marca: "Cadillat", modelo: "ATS", precio: 176000}
    ]
  }
}

