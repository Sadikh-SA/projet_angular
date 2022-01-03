import { Component, OnInit } from '@angular/core';
import { PartageService } from '../Services/partage.service';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  constructor(public partageService:PartageService,  private route:ActivatedRoute) {}
  public panier: any;
  public panierValide: any;
  ngOnInit(): void {
    this.partageService.panier.subscribe((panier: any) => this.panier = panier);
    this.panierValide = JSON.parse(JSON.stringify(this.panier));
    const temp : any[] = this.panier;
    // this.partageService.viderPanier();
    temp.forEach((livre:any, index:number) => {
      this.partageService.removeFromPanier(livre);
    });
    this.partageService.removeTheOnlyLivre();

    

  }

  getTodayDate() {
    return new Date().toLocaleDateString('fr-FR');
  }

  getCommandeId() {
    let p:any;
    this.route.queryParamMap
  .subscribe((params:any) => {
        p = { ...params.keys, ...params };
      }
    );
    return p.params.id;
  }

}
