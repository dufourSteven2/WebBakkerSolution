import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title: string;
  produkten: string[];
  ngOnInit() {
    this.title = 'Bakkerij - Angular-App';
    this.produkten= ['Brood', 'Belegde broodjes', 'Koffiekoeken', 'Taarten'];
  }
  
}
