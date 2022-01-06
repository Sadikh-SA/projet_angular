import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { Commande } from '../models/Commande';
import { CommandeService } from '../Services/commande.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {

  public commandes : Commande[] = [];
  public hideLoader: boolean = false;
  constructor( private commandeService:CommandeService) { 
    this.commandes = [new Commande()];
  }

  async ngOnInit(): Promise<void> {
    this.commandes = await this.commandeService.getCommandes().then(data => { return data});
    this.commandes = this.commandes.filter(res => res.user === localStorage.getItem('userId'));
    this.hideLoader = true;
  }
  formaterDate(date:any) {
    var dt = new Date(Date.parse(date));
    var localDate = dt;
    
    var gmt = localDate;
        var min = gmt.getTime() / 1000 / 60;
        var localNow = new Date().getTimezoneOffset();
        var localTime = min - localNow;

    var dateStr = new Date(localTime * 1000 * 60);
    return dateStr.toLocaleDateString('fr-FR');
  }

}
