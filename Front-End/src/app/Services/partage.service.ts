import { Injectable } from '@angular/core';
import { BehaviorSubject, never } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartageService {
  public panier : BehaviorSubject<[]> = new BehaviorSubject([]);
  public accessToken : BehaviorSubject<any> = new  BehaviorSubject("");
  public nomClient : BehaviorSubject<any> = new  BehaviorSubject("");
  constructor() {}
 
  sharedPanier = this.panier.asObservable();

  addTopanier(livre: any) {
    this.panier.next(livre)
  }

  removeFromPanier(livre: any) {
   // temp : any[] = this.panier.getValue();
    //var temp = this.panier;
    const temp:[] = this.panier.getValue();
    this.panier =  new BehaviorSubject([]);
    let found : Boolean = false;
    temp.forEach((l, index) => {
      // if(l !== livre._id) this.panier.next(livre)
      if(l === livre && !found) {temp.splice(index, 1); found=true;}
    });

    this.panier.next(temp);
    
  }

  removeTheOnlyLivre() {
    const temp:[] = this.panier.getValue();
    this.panier =  new BehaviorSubject([]);
    temp.splice(0, 1);
    this.panier.next(temp);
  }

  // viderPanier(){
  //   console.log("Debut du vidage");
  //   const temp:[] = this.panier.getValue();
  //   temp.forEach((livre, index) => {
  //     //this.removeFromPanier(livre);
  //     console.log(livre+ " ");
  //   });
  //   //this.panier.;
  //   console.log("Fin du vidage");
  // }

  setAccessToken(tokenString :any ){
    this.accessToken.next(tokenString);
  } 
  
  setNom(nom :any ){
    this.nomClient.next(nom);
  }



}
