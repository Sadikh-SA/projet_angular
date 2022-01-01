import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CommandeService } from '../Services/commande.service';
import { PartageService } from '../Services/partage.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public estRempli: any = {nom: true, prenom: true, pays: true, email: true, telephone: true, adresse: true, ville: true, codepostal: true }
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
    let result: boolean = true;
    if(data.nom.length===0) {this.estRempli.nom = false; result=result&&false; }else {this.estRempli.nom = true;}
    if(data.prenom.length===0) {this.estRempli.prenom = false; result=result&&false; }else {this.estRempli.prenom = true;}
    if(data.email.length===0) {this.estRempli.email = false; result=result&&false; }else {this.estRempli.email = true;}
    // if(data.pays.length) {this.estRempli.pays = false; result=result&&false }else {this.estRempli.pays = true;}
    if(data.telephone.length===0) {this.estRempli.telephone = false; result=result&&false; }else {this.estRempli.telephone = true;}
    if(data.adresse.length===0) {this.estRempli.adresse = false; result=result&&false; }else {this.estRempli.adresse = true;}
    if(data.ville.length===0) {this.estRempli.ville = false; result=result&&false; }else {this.estRempli.ville = true;}
    if(data.codepostal.length===0) {this.estRempli.codepostal = false; result=result&&false; }else {this.estRempli.codepostal = true;}
    if(!result)
    Swal.fire(
      'Erreur',
      "Veuillez remplir tous les champs obligatoires s'il vous plait.",
      'error'
    )
    return result;
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
