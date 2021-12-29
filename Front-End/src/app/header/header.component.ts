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
  constructor(private partageService:PartageService) {
    this.partageService.accessToken.subscribe((accessToken: any) => this.accessToken = accessToken);
    this.partageService.nomClient.subscribe((nomClient: any) => this.nomClient = nomClient);
  }
  public panier: any;
  public accessToken: any = "";
  public nomClient: any= "";
  
  ngOnInit(): void {
    this.partageService.panier.subscribe((panier: any) => this.panier = panier);
    // if(localStorage.getItem("accessToken")!=null && localStorage.getItem("accessToken")!=undefined) {this.accessToken = localStorage.getItem("accessToken");}
    // if(localStorage.getItem("nomClient")!=null && localStorage.getItem("nomClient") !=undefined) { this.nomClient = localStorage.getItem("nomClient");}
    if(localStorage.getItem("accessToken")!=null && localStorage.getItem("accessToken")!=undefined){
     // this.accessToken = localStorage.getItem("accessToken");
      this.partageService.setAccessToken(localStorage.getItem("accessToken"));
    }
    if(localStorage.getItem("nomClient")!=null && localStorage.getItem("nomClient") !=undefined) {
      // this.nomClient = localStorage.getItem("nomClient");
       this.partageService.setNom(localStorage.getItem("nomClient"));
    }

    console.log(this.nomClient,this.accessToken );
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
    localStorage.setItem("nomClient", "");
    console.log("logout");
    window.location.reload();
  }
}