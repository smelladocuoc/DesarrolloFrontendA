import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

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
