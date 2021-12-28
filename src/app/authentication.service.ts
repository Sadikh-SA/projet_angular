import { Injectable } from '@angular/core';
import axios from 'axios';
import { PartageService } from './partage.service';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private partageService : PartageService) { }
  async register(creds: any): Promise<any> {
    var data = JSON.stringify({"nom": creds.nom_complet,"email":creds.email,"password":creds.password1});
    var response;
    try {
      response = await axios.post("http://localhost:3030/users", data, {headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
     }});
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
      var code = response.status;
      console.log("la rep", response);
      if(code == 201) {
        var token = response.data.accessToken;
        localStorage.setItem("accessToken", token);
        localStorage.setItem("nomClient", response.data.user.nom);
        localStorage.setItem("userId", response.data.user._id);
        this.partageService.setAccessToken(token);
        this.partageService.setNom(response.data.user.nom);
      }
      return token && code == 201;
    } catch (error) {
      return false;
    }
  }




}
