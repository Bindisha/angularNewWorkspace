import {Component} from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  author: string;
  price: number;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'War and Women', author: "Dr. MA Hasan", price: 500.00,action:""},
  {position: 2, name: 'Mundaka Upanishad', author: "Dr. Karan Singh ", price: 1200,action:""},
  {position: 3, name: 'Braving A Viral Storm', author: "Mansukh Mandaviya", price: 800,action:""},
  {position: 4, name: 'Revolutionaries', author: "Amit Shah", price: 1000,action:""},
  {position: 5, name: 'Statistical Tables', author:"RBI", price: 2000,action:""}
  ];


@Component({
  selector: 'app-list-receipe',
  templateUrl: './list-receipe.component.html',
  styleUrls: ['./list-receipe.component.css']
})
export class ListReceipeComponent {
  displayedColumns: string[] = ['position', 'name', 'author', 'price','action'];
  dataSource = ELEMENT_DATA;
}
