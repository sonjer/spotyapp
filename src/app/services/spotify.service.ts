import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class SpotifyService {
  data:any[]=[];
  constructor( public http: HttpClient) {

    console.log('servicio de spotify listo');
  }
  getArtistas(){
    let promesa = new Promise((resolve, reject)=> {
      let url ='https://jsonplaceholder.typicode.com/users';
      this.http.get(url)
        .subscribe( resp =>{
          console.log("resp: " +JSON.stringify(resp));
          if(resp.length > 0){
            this.data = resp;
            console.log(this.data);
            resolve(true);
          }else{
            console.log(resp);
            resolve(false);
          }

        });

    });
    return promesa;
  }
}


