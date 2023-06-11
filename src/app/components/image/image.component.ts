import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from 'src/app/models/image.interface';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
  image!: Image;
  showDetails: boolean = false;
  showSpinner: boolean = false;
  showSpinnerDetails: boolean = false;

  constructor(private ImagesService: ImagesService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');

    this.ImagesService.getImageById(identifier!).subscribe((image) => {

      if (!image) {
        return this.router.navigateByUrl('/');
      }

      this.image = image;
      this.image.image_pokemon = image.sprites.front_default;
      this.image.weight = image.weight;
      this.image.ability = image.abilities[0].ability.name;
      return image;
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
