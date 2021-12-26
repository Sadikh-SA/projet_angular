import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  async register(creds: any): Promise<any> {
    var data = JSON.stringify({"nom": creds.nom_complet,"email":creds.email,"password":creds.password1});
    var response;
    try {
      response = await axios.post("http://localhost:3030/users", data, {headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
     }});
      console.log("yo",response);
      var code = response.status;
      return code == 201;
    } catch (error) {
      return false;
    }
  }


  async login(creds: any): Promise<any> {
    var data = JSON.stringify({"email":creds.email,"password":creds.password,"strategy":"local"});
    var response;
    try {
      response = await axios.post("http://localhost:3030/authentication", data, {headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
     }});
      console.log("yo",response);
      var code = response.status;
      if(code == 201) {
        var token = response.data.accessToken;
        localStorage.setItem("accessToken", token);
      }
      return token && code == 201;
    } catch (error) {
      return false;
    }
  }




}
