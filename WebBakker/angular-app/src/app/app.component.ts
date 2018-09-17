import { Component, OnInit } from '@angular/core';
import { Produkt } from "./shared/model/produkt.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  produkten: Produkt[];
  constructor() {
    this.produkten = [
      new Produkt(1, 'Brood'),
      new Produkt(1, 'Belegde broodjes'),
      new Produkt(1, 'Kofiekoeken'),
      new Produkt(1, 'Taart')
    ]
  }
  ngOnInit() {
    this.title = 'Mijn produkten - via Model';
  }
}
  

