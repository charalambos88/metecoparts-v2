import { Injectable }    from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Car } from '../models/car';

@Injectable()
export class CarService {

  private carsUrl = 'https://aposirsi.herokuapp.com/api'  // URL to web api
  //private carsUrl = 'http://localhost:3000/api';  // URL for development
  constructor(private http: Http) { }

  createAuthorizationHeader(headers: Headers) {
    headers.append('user', '1');
  }

  createParams(carsUrl: string,filters: Map<string, any>) :string {
    if (filters) {
      carsUrl = carsUrl.concat('?');
    }
    filters.forEach(function (key, value){
      carsUrl = carsUrl.concat(`${value}=${key}&`);
    });
    return carsUrl;
  }

  getCars(filters: Map<string, any>): Promise<Car[]> {
    let carsUrl = this.carsUrl.concat('/cars');
    let headers = new Headers();
    let params = new URLSearchParams();
    this.createAuthorizationHeader(headers);
    carsUrl = this.createParams(carsUrl, filters);
    let options = new RequestOptions({ headers: headers });
    return this.http.get(carsUrl, options)
               .toPromise()
               .then(
                 response => response.json().data
               )
               .catch(this.handleError);
  }

  getCar(id: number): Promise<Car> {
    let carsUrl = this.carsUrl.concat('/cars/' + id);
    let headers = new Headers();
    let params = new URLSearchParams();
    this.createAuthorizationHeader(headers);
    let options = new RequestOptions({ headers: headers });
    return this.http.get(carsUrl, options)
               .toPromise()
               .then(
                 response => response.json().data as Car
               )
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return
  }
}