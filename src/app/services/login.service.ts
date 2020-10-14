import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private serverUrl="https://app-profundizacion2.herokuapp.com/";
  private token:string;


  constructor(private http:HttpClient) { }



  private crearRequestHearder(){
    let headers = new HttpHeaders({
     "Authorization": "Bearer"+this.token,
     "Content-Type" : "application/json"
    });
    //return this.http.post(this.serverUrl+"api/usuario/autenticar",data,{headers: headers})
  }
}
