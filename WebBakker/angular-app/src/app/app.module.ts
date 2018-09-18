import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//services
import { ProduktService } from './shared/services/produkt.service';
//componenten
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ProduktService],
  bootstrap: [AppComponent]
})
export class AppModule { }
