import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brewery } from './brewery';

@Injectable({
  providedIn: 'root'
})

export class BreweryService {

  private baseUrl = 'https://api.openbrewerydb.org';

  b: Brewery = new Brewery();

  items: Brewery[] = [];

  constructor(private http:HttpClient) { }

  getBreweryList(): Observable<any> {
    console.log("Connected to Brewery API");
    return this.http.get(`${this.baseUrl}` + '/breweries');
  }

  getBreweriesByCity(user: any): Observable<any> {
    console.log("Look for breweries in city");
    return this.http.get(`${this.baseUrl}` + '/breweries?by_city=' + `${user}`);
  }

  getBreweryByName(user: any): Observable<any> {
    console.log("Brewery Name was selected");
    return this.http.get(`${this.baseUrl}` + '')
  }

  /* getBreweries(brewery: Brewery) {
    this.items.push(brewery)
  } */

  /* getBreweries() {
    return this.http.get<any>(`${this.baseUrl}` + '/breweries')
    .toPromise()
    .then(res => <Brewery[]>res.data)
    .then(data => { return data; })
  } */

}
