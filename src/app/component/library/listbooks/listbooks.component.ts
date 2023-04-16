import {Component} from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  author: string;
  price: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'War and Women', author: "Dr. MA Hasan", price: 500.00},
  {position: 2, name: 'Mundaka Upanishad', author: "Dr. Karan Singh ", price: 1200},
  {position: 3, name: 'Braving A Viral Storm', author: "Mansukh Mandaviya", price: 800},
  {position: 4, name: 'Revolutionaries', author: "Amit Shah", price: 1000},
  {position: 5, name: 'Statistical Tables', author:"RBI", price: 2000}
  ];


@Component({
  selector: 'app-listbooks',
  templateUrl: './listbooks.component.html',
  styleUrls: ['./listbooks.component.css']
})
export class ListbooksComponent {
  displayedColumns: string[] = ['position', 'name', 'author', 'price'];
  dataSource = ELEMENT_DATA;
}
