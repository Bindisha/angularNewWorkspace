import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Library } from 'src/app/entity/library';
import { HttpsGenericService } from 'src/app/service/https-service.service';
import {Location} from '@angular/common';
import { LibraryService } from 'src/app/service/library.service';


@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent
{
  constructor(private router:Router,private httpService: LibraryService,private activeRoute: ActivatedRoute,private location: Location){}

   dataSource: Library = new Library;

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.params['id']; //taking value from router link
    this.httpService.getBookById(id).subscribe(data=>{
       this.dataSource = data;
    })
  }
  back(): void {
    this.location.back()
  }
  displayedColumns: string[] = ['id', 'title', 'author', 'price'];
}
