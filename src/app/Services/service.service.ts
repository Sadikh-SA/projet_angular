import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import lesLivres from '../data/lesLivres.json';
import { Livre } from '../material/Livre';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  //public pizzas: Pizza[] = new BehaviorSubject ([
  public livres : BehaviorSubject<Livre[]> = new BehaviorSubject<Livre[]>(lesLivres);

  /*findSearch(id:number): Observable {
      this.livres.next();
  }*/

  constructor() { }
}
