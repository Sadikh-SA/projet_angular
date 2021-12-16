import { Component, OnInit } from '@angular/core';
import { Livre } from '../material/Livre';
import { ServiceService } from '../Services/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  livre_trier: Livre[] = [];
  livres: Livre[] = [];
  constructor(private monService: ServiceService) { }

  ngOnInit(): void {
    //this.monService.livres.subscribe( (livres: any) => {
      this.livres = this.monService.livres
    //})
    console.log("data2:",this.livres);
    this.getLivres({pageIndex: this.page, pageSize: this.size});
    console.log("data:",this.livre_trier);
  }

  page = 0;
  size = 6;

  getLivres(obj: { pageIndex: any; pageSize: any; }) {
    let index=0,
        startingIndex=obj.pageIndex * obj.pageSize,
        endingIndex=startingIndex + obj.pageSize;

    this.livre_trier = this.livres.filter(() => {
      index++;
      return (index > startingIndex && index <= endingIndex) ? true : false;
    });
  }

}
