import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '../models/data.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAllData(): Observable<any> {
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon');
  }

  getDataById(id: string): Observable<any> {
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon/' + id);
  }
}
