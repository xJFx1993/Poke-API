import { Component , OnInit} from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {

  name!: string 
  urlimage!: string

  constructor(private pokeonSS : PokemonService){}

  search (){
   this.pokeonSS.getpokemon (this.name).subscribe((data:any) => {

    
    this.urlimage = data.Sprites.front_default

   });

  }

}
