import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produkt } from "./shared/model/produkt.model";
import { ProduktService } from './shared/services/produkt.service'; //hier import service

// importeer de Service
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  produkten$: Observable<Produkt[]>;
  currentprodukt$: Observable<Produkt>;
  //title: string;
 // produkten: Produkt[];
  //currentProdukt: Produkt;
  //produktPhoto: string = '';

  constructor(private produktService: ProduktService) { }

  ngOnInit() {
    this.title = 'Steden via json-server';
    this.produkten$ = this.produktService.getProdukten();

  }
  // Detailgegevens voor produkt ophalen
  getProdukt(id: number) {
    this.currentprodukt$ = this.produktService.getProdukt(id);
  }

  // Produkt toevoegen --> doorgeven aan de service
  addProdukt(produktNaam: string, produktItem: string) {

    // id === null, omdat deze automatisch door json-server wordt ingevuld

    const newProdukt = new Produkt(null, produktNaam, produktItem);
    this.produktService.addProdukt(newProdukt).subscribe((addedProdukt: Produkt) => {
      // produkten opnieuw ophalen in de subscription.
      this.produkten$ = this.produktService.getProdukten();
      this.currentprodukt$ = of(addedProdukt);
    });
  }

  // Produkt verwijderen --> doorgeven aan de service
  deleteProdukt(produkt: Produkt) {
    // TODO
  }

  editProdukt(produkt: Produkt) {
    // TODO
  }

  clear() {
    this.currentprodukt$ = null;
  }
}

  

  

