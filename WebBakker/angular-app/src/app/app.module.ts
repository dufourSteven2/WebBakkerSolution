import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//componenten
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

//services
import { ProduktService } from './shared/services/produkt.service';

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
