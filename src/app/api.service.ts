import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public http: HttpClient) {}

  getAllDogsList() {
    return this.http.get('https://dog.ceo/api/breeds/list/all');
  }

  getImageByBreed(breed: any) {
    return this.http.get(`https://dog.ceo/api/breed/${breed}/images/random`);
  }
}
