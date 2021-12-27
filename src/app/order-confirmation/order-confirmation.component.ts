import { Component, OnInit } from '@angular/core';
import { PartageService } from '../partage.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  constructor(private partageService:PartageService) {}
  public panier: any;
  public panierValide: any;
  ngOnInit(): void {
    this.partageService.panier.subscribe((panier: any) => this.panier = panier)
    this.panierValide = this.panier;
  }

  prixDuPanier(panier: any[]) : any {
    var prix = 0;
    panier.forEach(livre => {
      prix += livre.prix;
    });
    return prix;
  }

  getTodayDate() {
    return new Date().toLocaleDateString('fr-FR');
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

}
