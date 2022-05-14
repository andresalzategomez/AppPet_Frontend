import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InsertarComponent } from './insertar/insertar.component';
import { InsertarService } from './insertar/insertar.service';
import { ConsumeApi } from './consumeApi.service';
import { HttpClientModule } from '@angular/common/http';
import { MascotasComponent } from './mascotas/mascotas.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InsertarComponent,
    MascotasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [InsertarService, ConsumeApi, InsertarComponent, MenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
