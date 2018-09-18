import { Injectable } from '@angular/core';
import { Produkt } from '../model/produkt.model';
import { HttpClient } from '@angular/common/http';

// Observable stuff
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable() 

export class ProduktService {
  constructor(private http: HttpClient) {}
  // retourneer alle produkten
  getProdukten(): Observable<Produkt[]> {
    return this.http
      .get<Produkt[]>('../assets/data/produkten.json')
      .pipe(tap(result => console.log('opgehaald via de service: ', result)));
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
