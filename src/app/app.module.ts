import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {ProgramasService} from "./programas/service/programas.service";
import {PlanesModule} from "./programas/programas.module";
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
    PlanesModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [ProgramasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
