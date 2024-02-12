import { ApplicationConfig, NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonService } from './services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

NgModule({
  declarations:[
      AppComponent,
      PokemonComponent
  ],
  imports:[
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[ PokemonService],
  bootstrap: [AppComponent]

})

export class AppModule{}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};
