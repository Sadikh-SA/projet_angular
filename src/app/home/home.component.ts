import { Component, OnInit } from '@angular/core';
import { LivresService } from '../livres.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public livres: any[];
  public Alllivres: any[];
  public npages: number;
  public nItemP = 8;
  public page = 1;
  livresService = new LivresService;
  constructor(livresService : LivresService, private route:Router) {
    this.livres = [];
    this.Alllivres = [];
    this.getAllLivres() ;
   
  }

  ngOnInit(): void {

  }




  async getAllLivres() {
    this.Alllivres = await this.livresService.getLivres();
    this.livres = this.Alllivres.slice((this.page-1)*this.nItemP, (this.page)*this.nItemP);
    this.npages = (this.Alllivres.length/this.nItemP);
    if(Math.trunc(this.npages) < this.npages) {this.npages = Math.trunc(this.npages) + 1;}
    console.log(this.Alllivres.length,this.npages);
  }

  async goToPage(n: number) {
    this.page = n;
    this.livres = this.Alllivres.slice((this.page-1)*this.nItemP, (this.page)*this.nItemP);
  }

  async goToNextPage() {
    this.page = this.page+1;
    this.livres = this.Alllivres.slice((this.page-1)*this.nItemP, (this.page)*this.nItemP);
  }

  async goToPrevPage() {
    this.page = this.page - 1;
    this.livres = this.Alllivres.slice((this.page-1)*this.nItemP, (this.page)*this.nItemP);
  }

  counter(i: number) {
    return new Array(i);
}

}
