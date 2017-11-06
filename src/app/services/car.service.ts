import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Car } from '../models/car';
import { Page } from '../models/pages';

@Injectable()
export class CarService {

  private carsUrl = 'https://aposirsi.herokuapp.com/api'  // URL to web api
  //private carsUrl = 'http://localhost:3000/api';  // URL for development
  constructor(private http: Http) { }

  createAuthorizationHeader(headers: Headers) {
    headers.append('user', '1');
  }

  createParams(page:number, carsUrl: string, filters: Map<string, any>): string {
    if (filters) {
      carsUrl = carsUrl.concat(`?page=${page}&`);
    }
    filters.forEach(function (key, value) {
      carsUrl = carsUrl.concat(`${value}=${key}&`);
    });
    return carsUrl;
  }

  getCars(page:number, filters: Map<string, any>): Promise<Car[]> {
    let carsUrl = this.carsUrl.concat('/cars');
    let headers = new Headers();
    let params = new URLSearchParams();
    this.createAuthorizationHeader(headers);
    carsUrl = this.createParams(page, carsUrl, filters);
    let options = new RequestOptions({ headers: headers });
    return this.http.get(carsUrl, options)
      .toPromise()
      .then(
      response => response.json().data
      )
      .catch(this.handleError);
  }

  //Get Number of Pages
  getPages(pages: number): Promise<Page> {
    let carsUrl = this.carsUrl.concat('/cars');
    let headers = new Headers();
    let params = new URLSearchParams();
    this.createAuthorizationHeader(headers);
    let options = new RequestOptions({ headers: headers });
    return this.http.get(carsUrl, options)
      .toPromise()
      .then(
      response => response.json().pages
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