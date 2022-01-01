import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Commande } from '../models/Commande';
import { Livre } from '../models/Livre';
import { CommandeService } from '../Services/commande.service';
import { PartageService } from '../Services/partage.service';
@Component({
  selector: 'app-details-commande',
  templateUrl: './details-commande.component.html',
  styleUrls: ['./details-commande.component.css']
})
export class DetailsCommandeComponent implements OnInit {
  public commande : Commande;
  public livres : Livre[] = [];
  constructor(private comandeService: CommandeService, private route:ActivatedRoute, public partageService:PartageService) {
    this.commande = new Commande();
   }

  async ngOnInit() {
    this.commande = await this.comandeService.getCommande(this.route.snapshot.paramMap.get('id'));
    this.livres = this.commande.livres;
    //console.log(this.livres)
  }

  // prixDuPanier(panier: any[]) : any {
  //   var prix = 0;
  //   panier.forEach(livre => {
  //     prix += livre.prix;
  //   });
  //   return prix;
  // }

}
