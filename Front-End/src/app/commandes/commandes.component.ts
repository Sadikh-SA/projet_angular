import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { CommandeService } from '../commande.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {

  constructor( private commandeService:CommandeService) { }
  public commandes : any;

  ngOnInit(): void {
    this.commandeService.getCommandes().then(data => {
      this.commandes=data,
      console.log(this.commandes);
      
    }
    );
    
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
