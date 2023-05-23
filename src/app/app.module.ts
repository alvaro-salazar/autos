import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {VehiculosService} from "./autos/service/vehiculos.service";
import {AutosModule} from "./autos/autos.module";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AutosModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [VehiculosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
