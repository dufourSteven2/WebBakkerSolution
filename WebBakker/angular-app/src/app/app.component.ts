import { Component, OnInit } from '@angular/core';
import { Produkt } from "./shared/model/produkt.model";
import { ProduktService } from './shared/services/produkt.service'; //hier import service
import { Observable } from 'rxjs';

// importeer de Service
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  produkten: Produkt[];
  currentProdukt: Produkt;
  produktPhoto: string = '';
  produkten$: Observable<Produkt[]>;

  constructor(private produktService: ProduktService) { }

  ngOnInit() {
    this.title = 'Produkt via HttpClient en service';
    this.produktService.getProdukten().subscribe(produkten => (this.produkten = produkten));
    this.produkten$ = this.produktService.getProdukten();
  }

  showProdukt(produkt: Produkt) {
    //alert('Uw keuze is: ' + produkt.naam);
    this.currentProdukt = produkt;
    this.produktPhoto = `assets/img/${this.currentProdukt.naam}.jpg`;
  }
  // Hieronder methode om produkt toe te voegen in de lijst
  addProdukt(produktNaam: string) {
    //ToDO
  }

  // Stad verwijderen --> doorgeven aan de service
  deleteProdukt(produkt: Produkt) {
    //Todo
  }

}

  

  

