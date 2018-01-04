import { Component } from '@angular/core';
import {SpotifyService} from './services/spotify.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private gridApi;
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
      {headerName: "COMPANY BS", field: "company.bs", width: 300},
      {headerName: "COMPANY CATCHPHRASE", field: "company.catchPhrase", width: 300}
    ];


  }

}
