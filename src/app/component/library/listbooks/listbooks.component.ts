import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Library } from 'src/app/entity/library';
import { HttpsGenericService } from 'src/app/service/https-service.service';
import { LibraryService } from 'src/app/service/library.service';

export interface PeriodicElement {
  name: string;
  position: number;
  author: string;
  price: number;
  action: string;
}

// const ELEMENT_DATA: Library[] = [
//   {"id":101,"title":"Life of Sachin","category":"horror","author":"sachin","year":2022,"price":230},
//   {"id":102,"title":"Life of Alex","category":"horror","author":"alex","year":2022,"price":230.45},
//   {"id":103,"title":"Life","category":"horror","author":"bran","year":2022,"price":250},
//   {"id":104,"title":"Life of Victor","category":"horror","author":"victor","year":2022,"price":211},
//   {"id":105,"title":"Life of Sachin","category":"horror","author":"sachin","year":2022,"price":210.34}
//   ];


@Component({
  selector: 'app-listbooks',
  templateUrl: './listbooks.component.html',
  styleUrls: ['./listbooks.component.css']
})
export class ListbooksComponent implements OnInit{


  constructor(private router:Router,private httpService: LibraryService, private activeRoute: ActivatedRoute){}
  dataSource:Library[] = [];
  deleteMessage=false;
  book!: Library;
  ngOnInit(): void {
    const book  = {
      "title":"Jerry Men",
    "category":"Action",
    "author":"SACHIN",
      "email":"sachin19927@gmail.com",
    "year":2023,
    "price":100.5
  }

    this.httpService.getAllBooks().subscribe(data=>{
      this.dataSource=data;


      this.httpService.saveBook(book).subscribe(data => {
        console.log(data);
      });

    })

  }




  displayedColumns: string[] = ['id', 'title', 'author', 'price','action'];



  navigateTo(id:number)
  {
    this.router.navigate(['library/view',id]);
  }
  navigateToDel(id:number)
  {
    //this.router.navigate(['library/listBooks',id])
    if(confirm("Are you sure to delete "+id +" ?")){
    this.httpService.deleteBookById(id).subscribe(()=>{
      this.deleteMessage=true;
      this.httpService.getAllBooks().subscribe(data =>{
        this.dataSource =data
        })
    })
    }

  }

}
