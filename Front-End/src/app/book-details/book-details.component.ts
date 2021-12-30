import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'
import { Livre } from '../models/Livre';
import { LivresService } from '../Services/livres.service';
import { PartageService } from '../Services/partage.service';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  public livre : Livre; 
  livresService = new LivresService
  public panier: any;
  constructor(livresService : LivresService, private route:ActivatedRoute, private partageService:PartageService ) {
    this.livre = new Livre();
  }

  async ngOnInit() {
    this.livre = await this.livresService.getLivre(this.route.snapshot.paramMap.get('id'));
    this.partageService.panier.subscribe((panier: any) => this.panier = panier)
  }
  
  addToPanier(livre:Livre) {
    this.panier.push(livre);
    this.partageService.addTopanier(this.panier);
    console.log(this.partageService.panier);

  }
}
