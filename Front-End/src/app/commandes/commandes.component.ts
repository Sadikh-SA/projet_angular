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
}
