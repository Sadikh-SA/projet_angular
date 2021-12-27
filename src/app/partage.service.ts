import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartageService {
  public panier : BehaviorSubject<never[]> = new BehaviorSubject([]) ;
  constructor() {}
 
  sharedPanier = this.panier.asObservable();

  addTopanier(livre: any) {
    this.panier.next(livre)
  }

  removeFromPanier(livre: any) {
    var temp = this.panier;
    this.panier =  new BehaviorSubject([]);
    temp.forEach(l => {
      // if(l !== livre._id) this.panier.next(livre)
      if(l != livre) this.panier.next(livre)
    });
  }


}
