import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url: string = "https://pokeapi.co/api/v2/pokemon";

  constructor(private http : HttpClient) { }

  getpokemon(name : string){
    return this.http.get(`${this.url}/${name}`)
  }

}
