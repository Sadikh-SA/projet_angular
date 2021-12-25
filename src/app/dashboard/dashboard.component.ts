import { Component, OnInit } from '@angular/core';
import { Livre } from '../material/Livre';
import { ServiceService } from '../Services/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data: Livre[] = [];
  data2: Livre[] = [];
  constructor(private monService: ServiceService) { }

  ngOnInit(): void {
    //this.monService.livres.subscribe( (livres: any) => {
      this.data2 = this.monService.livres
    //})
    console.log("data2:",this.data2);
    this.getData({pageIndex: this.page, pageSize: this.size});
    console.log("data:",this.data);
  }

  page = 0;
  size = 4;

  getData(obj: { pageIndex: any; pageSize: any; }) {
    let index=0,
        startingIndex=obj.pageIndex * obj.pageSize,
        endingIndex=startingIndex + obj.pageSize;

    this.data = this.data2.filter(() => {
      index++;
      return (index > startingIndex && index <= endingIndex) ? true : false;
    });
  }

}
