import { Component, OnInit } from '@angular/core';
import { Livre } from '../models/Livre';
import { PartageService } from '../Services/partage.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public panier: Livre[];

  constructor(private partageService:PartageService) {
    this.panier = [new Livre()];
  }
  
  ngOnInit(): void {
    this.partageService.panier.subscribe(panier => {
      this.panier = panier;
      console.log("panier", panier);
    })
  }

  prixDuPanier(panier: Livre[]) : number {
    var prix = 0;
    panier.forEach(livre => {
      prix += livre.prix;
    });
    return prix;
  }

  viderPanier() {
    const temp : any[] = this.panier;
    temp.forEach((livre:Livre, index:number) => {
      this.partageService.removeFromPanier(livre);
    });
    this.partageService.removeTheOnlyLivre();
  }
  
  removeFromPanier(livre: any) {
    this.partageService.removeFromPanier(livre);
  }
}
