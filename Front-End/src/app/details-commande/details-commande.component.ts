import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommandeService } from '../commande.service';
@Component({
  selector: 'app-details-commande',
  templateUrl: './details-commande.component.html',
  styleUrls: ['./details-commande.component.css']
})
export class DetailsCommandeComponent implements OnInit {
  public commande : any;
  public livres : any[] = [];
  constructor(private comandeService: CommandeService, private route:ActivatedRoute) { }

  async ngOnInit() {
    this.commande = await this.comandeService.getCommande(this.route.snapshot.paramMap.get('id'));
    this.livres = this.commande.livres;
    console.log(this.livres)
  }

  prixDuPanier(panier: any[]) : any {
    var prix = 0;
    panier.forEach(livre => {
      prix += livre.prix;
    });
    return prix;
  }

}
