import { Injectable } from '@angular/core';
import axios from 'axios';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  public nouvelleCommandeId:string="";
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
    //  console.log("La reponse", response);
      var code = response.status;
      this.nouvelleCommandeId = response.data._id;

      return code == 201;
    } catch (error:any) {
      if(error.response.status === 401)
        Swal.fire(
          'Erreur',
          "Votre session a probablemment expiré. Veuillez vous connecter.",
          'error'
        )
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
    } catch (error: any) {
      if(error.response.status === 401)
      Swal.fire(
        'Erreur',
        "Votre session a probablemment expiré. Veuillez vous connecter.",
        'error'
      )
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
    } catch (error:any) {
      if(error.response.status === 401)
      Swal.fire(
        'Erreur',
        "Votre session a probablemment expiré. Veuillez vous connecter.",
        'error'
      )
      return false;
    }
  }


}
