import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CommandeService } from '../Services/commande.service';
import { PartageService } from '../Services/partage.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(public partageService:PartageService, private route:Router, private commandeService: CommandeService) {}
  public panier: any;
  public commandeEnvoye: boolean = false;
  ngOnInit(): void {
    this.partageService.panier.subscribe((panier: any) => this.panier = panier)
  }

  // prixDuPanier(panier: any[]) : any {
  //   var prix = 0;
  //   panier.forEach(livre => {
  //     prix += livre.prix;
  //   });
  //   return prix;
  // }

  verifierTousLesChampsObligatoire(data:any): Boolean {
    return true;
  }

  async validerPanier(data:any) {
    if(this.verifierTousLesChampsObligatoire(data)) {
      if(localStorage.getItem('accessToken') == null || localStorage.getItem('accessToken') == undefined || localStorage.getItem('accessToken') == ""){
        this.route.navigate(['/auth'], { queryParams: { action: 'validation-panier' } });
      }else{
        this.commandeEnvoye = await this.commandeService.ajouterCommande(this.panier);
        if(this.commandeEnvoye){
          this.route.navigate(['/order-confirmation'],{queryParams: { id: this.commandeService.nouvelleCommandeId}});
        }
      }
    }
  }

}
