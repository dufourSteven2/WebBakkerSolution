//produkt.service.ts

import { Injectable } from '@angular/core';
import { Produkt } from '../model/produkt.model';

@Injectable() // { providedIn: 'root' } plaat deze tssn de haakjes en leeg de array providerin app.module.ts nieuwigheid angular 6

export class ProduktService {
  private produkten: Produkt[] = [
    new Produkt(1, 'Brood'),
    new Produkt(2, 'Belegde broodjes'),
    new Produkt(3, 'Koffiekoeken'),
    new Produkt(4, 'Taart')
  ];

  // retourneer alle produkten
  getProdukten(): Produkt[] {
    return this.produkten;
  }

  // retourneer produkten adhv ID
  getProdukt(id: number): Produkt {
    return this.produkten.find(c => c.id === id);
  }
  //produkt toevoegen
  addProdukt(produktNaam: string): void {
    let newProdukt = new Produkt(
      this.produkten.length + 1,
      produktNaam);
    this.produkten.push(newProdukt);
  }

  // Overige methodes voor de service
}
