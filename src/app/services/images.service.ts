import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../models/image.interface';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { }

  getAllImages(): Observable<any> {
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon');
  }

  getImageById(id: string): Observable<any> {
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon/' + id);
  }
}
