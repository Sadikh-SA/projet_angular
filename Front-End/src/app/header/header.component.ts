import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import {MatIconModule} from '@angular/material/icon';
import { MatSort } from '@angular/material/sort';
import { PartageService } from '../Services/partage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(public partageService:PartageService, private route : Router) {
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

    //console.log(this.nomClient,this.accessToken );
  }

  // prixDuPanier(panier: any[]) : any {
  //   var prix = 0;
  //   panier.forEach(livre => {
  //     prix += livre.prix;
  //   });
  //   return prix;
  // }
  
  removeFromPanier(livre: any) {
    this.partageService.removeFromPanier(livre);
  }

  reformaterNom(nomClient: any) { // Mettre chaque premiere lettre du nom en majuscule
    var splitStr = nomClient.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
 }

  logout() {
    localStorage.setItem("accessToken", "");
    localStorage.setItem("nomClient", "");
    //console.log("logout");
    this.route.navigate(['/']);
    window.location.reload();
  }
}
