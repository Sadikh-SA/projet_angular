import { Component, OnInit } from '@angular/core';
import { PartageService } from '../partage.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private partageService:PartageService) {}
  public panier: any;
  ngOnInit(): void {
    this.partageService.panier.subscribe((panier: any) => this.panier = panier)
  }

  prixDuPanier(panier: any[]) : any {
    var prix = 0;
    panier.forEach(livre => {
      prix += livre.prix;
    });
    return prix;
  }

  viderPanier() {
    const temp : any[] = this.panier;
    temp.forEach((livre:any, index:number) => {
      this.partageService.removeFromPanier(livre);
    });
    this.partageService.removeTheOnlyLivre();
  }
  
  removeFromPanier(livre: any) {
    this.partageService.removeFromPanier(livre);
  }
}
