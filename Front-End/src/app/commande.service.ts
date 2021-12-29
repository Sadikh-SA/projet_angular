import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor() { }
  async ajouterCommande(livres: any[]): Promise<any> {
    var response;
    var userId:string;
    var data = JSON.stringify({ user: localStorage.getItem("userId"), livres: livres});
    try {
      response = await axios.post("http://localhost:3030/commandes", data, {headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
     }});
     console.log("La reponse", response);
      var code = response.status;
      return code == 201;
    } catch (error) {
      return false;
    }
  }

  async getCommande(id: any): Promise<any> {
    var response:any;
    try {
      response = await axios.get("http://localhost:3030/commandes/"+id, {headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
     }});
      var data = response.data;
      return data;
    } catch (error) {
      return false;
    }
  }
  async getCommandes(): Promise<any> {
    var response:any;
    try {
      response = await axios.get("http://localhost:3030/commandes/?user="+localStorage.getItem("userId"), {headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
     }});
      var data = response.data.data;
      return data;
    } catch (error) {
      return false;
    }
  }


}
