import { Injectable } from '@angular/core';
import { Produkt } from '../model/produkt.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Observable stuff
import { map, retry, delay, tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable() 

export class ProduktService {
  url = 'http://localhost:3000/produkten';
  constructor(private http: HttpClient) { }
  // retourneer alle cities
  getProdukten(): Observable<Produkt[]> {
    return this.http.get<Produkt[]>(this.url).pipe(
      tap(result => console.log('opgehaald via de service: ', result)),
      retry(3),
      delay(2000),
      catchError(err => {
        console.log(
          'Geen API aangetroffen. Start eerst json-server met "npm run json-server". '
        );
        // De methode moet een observable teruggeven. genereer daarom een
        // observable op basis van de error. De methode hiervoor heet of().
        return of(err);
      })
    );
  }

  // retourneer city op basis van ID
  getProdukt(id: number): Observable<Produkt> {
    return this.http.get<Produkt>(`${this.url}/${id}`);
  }

  // Stad toevoegen,
  addProdukt(newProdukt: Produkt): Observable<Produkt> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<Produkt>(this.url, newProdukt, { headers: headers });
  }

  // stad verwijderen
  deleteProdukt(produkt: Produkt): void {
    // TODO: talk to API
  }

  // stad wijzigen
  editProdukt(produkt: Produkt): void {
    // TODO: talk to API
  }

  // Overige methods voor de service...
  //...
}
