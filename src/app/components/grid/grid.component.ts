import { Component } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';

export interface imageList {
  id: number;
  name: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent {

  pokemon_data: imageList[] = [];

  displayedColumns: string[] = ['id', 'name'];
  dataSource: imageList[] = [];
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
        this.pokemon_data.push(pokemonData);
        this.dataSource = this.pokemon_data;
      }
    });
    setTimeout(() => {
      this.showSpinner = false;
    }, 1500);
    this.showSpinner = true;
  }

}
