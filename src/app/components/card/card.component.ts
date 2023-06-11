import { Component } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-grid',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  displayedColumns: string[] = ['position', 'image', 'name'];
  elements: any[] = [];
  pokemons = [];
  showSpinner: boolean = false;

  constructor(private imagesService: ImagesService) {
  }

  ngOnInit(): void {
    let pokemonData;

    this.imagesService.getAllImages().subscribe((images) => {
      for (let i = 0; i <= 19; i++) {
        pokemonData = {
          id: i + 1,
          name: images.results[i].name
        };
        this.elements.push(pokemonData);
      }
      setTimeout(() => {
        this.showSpinner = false;
      }, 1500);
      this.showSpinner = true;
    });
  }

}