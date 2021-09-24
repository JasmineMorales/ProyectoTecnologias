import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl = environment.baseUrl;
 
  constructor(protected http: HttpClient) { }

  getCategorias() {
    return this.http.get(`${this.baseUrl}/categorias`);
  }

  getHumidity() {
    return this.http.get(`${this.baseUrl}/humidity`);
  }

  getTemperature(){
   return this.http.get(`${this.baseUrl}/temperature`);
  }

  getHumData() {
    return this.http.get(`${this.baseUrl}/calculatedHumData`);
  }

  getTempData(){
   return this.http.get(`${this.baseUrl}/calculatedTempData`);
  }

}