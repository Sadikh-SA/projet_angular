import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'
import { LivresService } from '../livres.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  public livre : any; 
  livresService = new LivresService
  constructor(livresService : LivresService, private route:ActivatedRoute ) {
    this.livre = {}
  }

  async ngOnInit() {
    this.livre = await this.livresService.getLivre(this.route.snapshot.paramMap.get('id'));
  }

}
