import { Injectable } from '@angular/core';
import lesLivres from '../data/lesLivres.json';
import { Livre } from '../models/Livre';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  // public livres:Livre[] = lesLivres;

  constructor() { }
}
