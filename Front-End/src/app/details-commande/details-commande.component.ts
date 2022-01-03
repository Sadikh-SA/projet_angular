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
  public hideLoader: boolean = false;
  public livres : Livre[] = [];
  constructor(public comandeService: CommandeService, private route:ActivatedRoute, public partageService:PartageService) {
    this.commande = new Commande();
   }

  async ngOnInit() {
    this.commande = await this.comandeService.getCommande(this.route.snapshot.paramMap.get('id'));
    this.livres = this.commande.livres;
    this.hideLoader= true;
  }

}
