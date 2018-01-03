import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class SpotifyService {

  constructor( public http: HttpClient) {

    console.log('servicio de spotify listo');
  }
  getArtistas(){

    let url ='https://jsonplaceholder.typicode.com/users';
    this.http.get(url)
      .subscribe( resp =>{

        console.log(resp);
      })
  }
}



