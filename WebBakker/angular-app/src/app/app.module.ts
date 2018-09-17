import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
//import { ProduktenComponent } from './produkten/produkten.component';
import { FormsModule } from '@angular/forms';

//services
import { ProduktService } from './shared/services/produkt.service';

@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProduktService],
  bootstrap: [AppComponent]
})
export class AppModule { }
