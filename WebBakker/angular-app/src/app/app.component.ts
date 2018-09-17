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
  showProdukten: boolean = true;
  toggleMsg: string = 'Verberg de lijst met produkten';
  newProdukt: string = '';
  currentProdukt: Produkt;
  produktPhoto: string = '';

  constructor() {
    this.produkten = [
      new Produkt(1, 'Brood'),
      new Produkt(2, 'Belegde broodjes'),
      new Produkt(3, 'Koffiekoeken'),
      new Produkt(4, 'Taart')
    ]
  }
  ngOnInit() {
    this.title = 'Produkt selecteren - attribute binding FOTO';
    this.showProdukten = this.produkten.length > 3;
  }
  //Eventhadler hoofdstuk 4 Zie html lijn button
  btnClick() {
    alert('Dit was een click op de bestelknop')
  }
  toggleProdukten() {
    this.showProdukten = !this.showProdukten;
    this.showProdukten
      ? this.toggleMsg = 'Verberg de lijst met produkten.'
      : this.toggleMsg = 'Toon de lijst met produkten';
  }
  showProdukt(produkt: Produkt) {
    //alert('Uw keuze is: ' + produkt.naam);
    this.currentProdukt = produkt;
    this.produktPhoto = `assets/img/${this.currentProdukt.naam}.jpg`;
  }
  changeProdukt(value: string) {
    this.newProdukt = value;
  }
  // Hieronder methode om produkt toe te voegen in de lijst
  addProdukt(value: string) {
    let addedProdukt = new Produkt(
      this.produkten.length + 1, // id number
      value // de naam
    );
    this.produkten.push(addedProdukt);
  }
}
  

