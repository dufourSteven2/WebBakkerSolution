import { Component, OnInit } from '@angular/core';
import { Produkt } from "./shared/model/produkt.model";
import { ProduktService } from './shared/services/produkt.service'; //hier import service

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


  constructor(private produktService: ProduktService) { }

  ngOnInit() {
    this.title = 'Produkt Toevoegen - Verwijderen via SERVICE';
    this.produkten = this.produktService.getProdukten();
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
  addProdukt(produktNaam: string) {
    this.produktService.addProdukt(produktNaam);
  }

  // Stad verwijderen --> doorgeven aan de service
  deleteProdukt(produkt: Produkt) {
    this.produktService.deleteProdukt(produkt);
  }

}

  

  

