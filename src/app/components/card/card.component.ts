import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

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

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    let pokemonData;

    this.dataService.getAllData().subscribe((data) => {
      for (let i = 0; i <= 19; i++) {
        pokemonData = {
          id: i + 1,
          name: data.results[i].name
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