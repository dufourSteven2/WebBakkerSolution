import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//services
import { ProduktService } from './shared/services/produkt.service';
//componenten
import { AppComponent } from './app.component';
import { ProduktDetailComponent } from './produkt-detail/produkt-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ProduktDetailComponent  
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ProduktService],
  bootstrap: [AppComponent]
})
export class AppModule { }
