import { Component, OnInit } from '@angular/core';
import { LivresService } from '../livres.service';
import {Router} from '@angular/router';
import { PartageService } from '../partage.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public livres: any[];
  public Alllivres: any[];
  public AlllivresFiltre: any[];
  public npages: number;
  public nItemP = 8;
  public page = 1;
  public listeAuteurs : any[];
  public listeAnnees : any[];
  public listeCategories : any[];
  public panier : any[];
  livresService = new LivresService;
  constructor(livresService : LivresService, private route:Router, private partageService:PartageService) {
    this.livres = [];
    this.npages = 0;
    this.Alllivres = [];
    this.AlllivresFiltre = [];
    this.listeAuteurs = [];
    this.listeAnnees = [];
    this.listeCategories = [];

    
    this.getAllLivres() ;

  }

  addToPanier(livre:any) {
    this.panier.push(livre);
    this.partageService.addTopanier(this.panier);
    console.log(this.partageService.panier);

  }

  ngOnInit(): void {
    this.partageService.panier.subscribe((panier: any) => this.panier = panier)
  }

  rechercher(data: any) {
    this.livres = this.Alllivres;
    this.livres = this.livres.filter((livre) => livre.nom.toLocaleLowerCase().includes(data.motclee.toLocaleLowerCase()));
    if(data.categorie !=="") {
      this.livres = this.livres.filter((livre) => livre.categorie.toLocaleLowerCase().includes(data.categorie.toLocaleLowerCase()));
    }
    if(data.auteur !=="") {
      this.livres = this.livres.filter((livre) => livre.auteur.toLocaleLowerCase() === data.auteur.toLocaleLowerCase());
    }
    if(data.annee !=="") {
      this.livres = this.livres.filter((livre) =>  livre.annee == data.annee);
    }
    if(data.minPrix !=="") {
      this.livres = this.livres.filter((livre) =>  livre.prix >= data.minPrix );
    }
    if(data.maxPrix !=="") {
      this.livres = this.livres.filter((livre) =>  livre.prix <= data.maxPrix );
    }
    this.page = 1;
    this.npages = (this.livres.length/this.nItemP);
    if(Math.trunc(this.npages) < this.npages) {this.npages = Math.trunc(this.npages) + 1;}
    this.AlllivresFiltre = this.livres;
    this.livres = this.AlllivresFiltre.slice((this.page-1)*this.nItemP, (this.page)*this.nItemP);
    console.log("srx", this.livres);
    
  }


  async getAllLivres() {
    this.Alllivres = await this.livresService.getLivres();
    this.AlllivresFiltre = this.Alllivres;
    this.livres = this.Alllivres.slice((this.page-1)*this.nItemP, (this.page)*this.nItemP);
    this.npages = (this.Alllivres.length/this.nItemP);
    if(Math.trunc(this.npages) < this.npages) {this.npages = Math.trunc(this.npages) + 1;}
    this.listeAnnees =  (this.Alllivres.map(item => item.annee).filter((value, index, self) => self.indexOf(value) === index)).sort()
    this.listeAuteurs =  this.Alllivres.map(item => item.auteur).filter((value, index, self) => self.indexOf(value) === index)
    this.listeCategories =  this.Alllivres.map(item => item.categorie).filter((value, index, self) => self.indexOf(value) === index)
    console.log('lol',this.listeAnnees);
  }

  async goToPage(n: number) {
    this.page = n;
    this.livres = this.AlllivresFiltre.slice((this.page-1)*this.nItemP, (this.page)*this.nItemP);
  }

  async goToNextPage() {
    this.page = this.page+1;
    this.livres = this.AlllivresFiltre.slice((this.page-1)*this.nItemP, (this.page)*this.nItemP);
  }

  async goToPrevPage() {
    this.page = this.page - 1;
    this.livres = this.AlllivresFiltre.slice((this.page-1)*this.nItemP, (this.page)*this.nItemP);
  }

  counter(i: number) {
    console.log("Voici le i", i)
    return new Array(i);
}

}
