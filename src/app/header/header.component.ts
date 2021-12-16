import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import {MatIconModule} from '@angular/material/icon';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });

  }
  

}
