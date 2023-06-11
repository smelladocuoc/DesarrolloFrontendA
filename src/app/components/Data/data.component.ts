import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from 'src/app/models/data.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  data!: Data;
  showDetails: boolean = false;
  showSpinner: boolean = false;
  showSpinnerDetails: boolean = false;

  constructor(private DataService: DataService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');

    this.DataService.getDataById(identifier!).subscribe((data) => {

      if (!data) {
        return this.router.navigateByUrl('/');
      }

      this.data = data;
      this.data.image_pokemon = data.sprites.front_default;
      this.data.weight = data.weight;
      this.data.ability = data.abilities[0].ability.name;
      return data;
    });
    setTimeout(() => {
      this.showSpinner = false;
    }, 1500);
    this.showSpinner = true;
  }

  show(): void {

    setTimeout(() => {
      this.showDetails = !this.showDetails;
      this.showSpinnerDetails = !this.showSpinnerDetails;
    }, 1500);
    this.showSpinnerDetails = !this.showSpinnerDetails;
  }
}
