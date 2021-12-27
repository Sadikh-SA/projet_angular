import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import {MatIconModule} from '@angular/material/icon';
import { MatSort } from '@angular/material/sort';
import { PartageService } from '../partage.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private partageService:PartageService) {}
  public panier: any;
  public accessToken: any;
  public nomClient: any;
  ngOnInit(): void {
    this.partageService.panier.subscribe((panier: any) => this.panier = panier);
    this.accessToken = localStorage.getItem("accessToken");
    this.nomClient = localStorage.getItem("nomClient");
    
  }

  prixDuPanier(panier: any[]) : any {
    var prix = 0;
    panier.forEach(livre => {
      prix += livre.prix;
    });
    return prix;
  }
  
  removeFromPanier(livre: any) {
    this.partageService.removeFromPanier(livre);
  }

  logout() {
    localStorage.setItem("accessToken", "");
    console.log("logout");
    window.location.reload();
  }
}
