import { Injectable } from '@angular/core';
import { Produkt } from '../model/produkt.model';

@Injectable() 

export class ProduktService {

  // retourneer alle produkten
  getProdukten() {
   //TODO talk to api
  }

  // retourneer produkten adhv ID
  getProdukt(id: number) {
   //TODO talk to api
  }
  //produkt toevoegen
  addProdukt(produktNaam: string): void {
   //TODO talk to api
  }

  // stad verwijderen
  deleteProdukt(produkt: Produkt): void {
    //TODO talk to api
  }

  // Overige methodes voor de service
}
