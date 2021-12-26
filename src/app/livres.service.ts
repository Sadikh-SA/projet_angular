import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class LivresService {

  constructor() { }
  
  async getLivres(): Promise<any> {
    var response;
    try {
      response = await axios.get("http://localhost:3030/livres", {headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
     }});
      console.log("yo",response);
    } catch (error) {
      return false;
    }

    return response.data.data;
  }
}
