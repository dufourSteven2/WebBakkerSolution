import { Component, OnInit } from '@angular/core';
import { Produkt } from "./shared/model/produkt.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
//  template: `
//<!-- Inline Html -->
//<div class="container">
//<h1>{{title}} + wat tekst</h1>
//</div>
//`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  produkten: Produkt[];
  showProdukten: boolean;
  constructor() {
    this.produkten = [
      new Produkt(1, 'Brood'),
      new Produkt(2, 'Belegde broodjes'),
      new Produkt(3, 'Kofiekoeken'),
      new Produkt(4, 'Taart')
    ]
  }
  ngOnInit() {
    this.title = 'Mijn produkten - via Model';
    this.showProdukten = this.produkten.length > 3;
  }
  //Eventhadler hoofdstuk 4 Zie html lijn button
  btnClick() {
    alert('Dit was een click op de bestelknop')
  }
}
  

