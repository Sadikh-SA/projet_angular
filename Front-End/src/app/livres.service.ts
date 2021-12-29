import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class LivresService {

  constructor() { }

  shuffle(array: any[]) {
    let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
       [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
  async getLivres(): Promise<any> {
    var response;
    try {
      response = await axios.get("http://localhost:3030/livres", {headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
     }});
    } catch (error) {
      return false;
    }

    return this.shuffle(response.data.data);
  }

  async getLivre(id:any): Promise<any> {
    var response;
    try {
      response = await axios.get("http://localhost:3030/livres/"+id, {headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
     }});
    } catch (error) {
      return false;
    }

    return response.data;
  }

}
