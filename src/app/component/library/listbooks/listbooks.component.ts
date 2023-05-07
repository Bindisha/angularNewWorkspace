import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Library } from 'src/app/entity/library';
import { HttpsGenericService } from 'src/app/service/https-service.service';

export interface PeriodicElement {
  name: string;
  position: number;
  author: string;
  price: number;
  action: string;
}

const ELEMENT_DATA: Library[] = [
  {"id":101,"title":"Life of Sachin","category":"horror","author":"sachin","year":2022,"price":230},
  {"id":102,"title":"Life of Alex","category":"horror","author":"alex","year":2022,"price":230.45},
  {"id":103,"title":"Life","category":"horror","author":"bran","year":2022,"price":250},
  {"id":104,"title":"Life of Victor","category":"horror","author":"victor","year":2022,"price":211},
  {"id":105,"title":"Life of Sachin","category":"horror","author":"sachin","year":2022,"price":210.34}
  ];


@Component({
  selector: 'app-listbooks',
  templateUrl: './listbooks.component.html',
  styleUrls: ['./listbooks.component.css']
})
export class ListbooksComponent implements OnInit{


  constructor(private router:Router,private httpService: HttpsGenericService){}
  dataSource:Library[] = [];
  ngOnInit(): void {

    this.httpService.getListofBooks().subscribe(data=>{
      this.dataSource=data;
    })
  }

  displayedColumns: string[] = ['id', 'title', 'author', 'price','action'];



  navigateTo(position:number)
  {
    this.router.navigate(['library/view',position]);
  }
  navigateToDel(position:number,name:string)
  {
    this.router.navigate(['library/delete',position, name])
  }

}
