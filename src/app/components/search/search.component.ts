import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  private columnDefs;

  data2: any [] = [];

  constructor(public _spotify: SpotifyService) {
    this._spotify.getArtistas().then(valido => {
      if (valido) {
        this.data2 = this._spotify.data;
        console.log(this.data2);
      } else {
        console.log('No hay Artistas');
      }
    }).catch(error => {
      console.log('Error al obtener los artistas ' + error);
    });

    this.columnDefs = [
      {headerName: 'ID', field: 'id', width: 100},
      {headerName: 'NAME', field: 'name', width: 220},
      {headerName: 'PHONE', field: 'phone', width: 220},


      {headerName: 'USERNAME', field: 'username', width: 150},
      {headerName: 'WEBSITE', field: 'website', width: 150},
      {headerName: 'EMAIL', field: 'email', width: 250},
      {
        headerName: 'ADDRESS', children: [
          {headerName: 'CITY', columnGroupShow: 'closed', field: 'address.city', width: 300},
          {headerName: 'CITY', columnGroupShow: 'open', field: 'address.city', width: 300},
          {headerName: 'LAT', columnGroupShow: 'open', field: 'address.geo.lat', width: 300},
          {headerName: 'LNG', columnGroupShow: 'open', field: 'address.geo.lng', width: 300},
          {headerName: 'STREEET', columnGroupShow: 'open', field: 'address.suite', width: 300},
          {headerName: 'ZIPCODE', columnGroupShow: 'open', field: 'address.zipcode', width: 300},
        ]
      },
      {
        headerName: 'COMPANY', children: [
          {headerName: 'COMPANY NAME', columnGroupShow: 'closed', field: 'company.name', width: 300},
          {headerName: 'COMPANY NAME', columnGroupShow: 'open', field: 'company.name', width: 300},
          {headerName: 'BS', columnGroupShow: 'open', field: 'company.bs', width: 300},
          {headerName: 'CATCHPHRASE', columnGroupShow: 'open', field: 'company.catchPhrase', width: 300},
        ]
      }
    ];


  }

  onBtExport() {
    let param = {
      skipHeader: getBooleanValue('#skipHeader'),
      columnGroups: getBooleanValue('#columnGroups'),
      skipFooters: getBooleanValue('#skipFooters'),
      skipGroups: getBooleanValue('#skipGroups'),
      skipPinnedTop: getBooleanValue('#skipPinnedTop'),
      skipPinnedBottom: getBooleanValue('#skipPinnedBottom'),
      allColumns: getBooleanValue('#allColumns'),
      onlySelected: getBooleanValue('#onlySelected'),
      suppressQuotes: getBooleanValue('#suppressQuotes'),
      fileName: document.querySelector('#fileName'),
      columnSeparator: document.querySelector('#columnSeparator')
    };
    this.columnDefs.exportDataAsCsv(param);
    function getBooleanValue(cssSelector) {
      return document.querySelector(cssSelector).checked === true;
    }
  }

}





