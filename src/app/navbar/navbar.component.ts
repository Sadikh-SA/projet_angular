import { Component, OnInit } from '@angular/core';
import data from "../categories.json";

interface Categories {
  id : Number,
  titre : string
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  public categoriesList: any[] = data;
  ngOnInit(): void {
      console.log("categories",this.categoriesList);
  }

}
