import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';

import { AuthModule } from './auth/auth.module';
import { ActividadesModule } from './actividades/actividades.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    ActividadesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
