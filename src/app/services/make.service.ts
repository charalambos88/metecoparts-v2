import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Make } from '../models/make';

@Injectable()
export class MakeService {
	private carsUrl = 'https://aposirsi.herokuapp.com/api/makes';  // URL to web api
	constructor(private http:Http) { }

	createAuthorizationHeader(headers: Headers) {
		headers.append('user', '1');
	}

	getMakes(): Promise<Make[]>{
		let headers = new Headers();
		this.createAuthorizationHeader(headers);

		let options = new RequestOptions({ headers: headers });
		return this.http.get(this.carsUrl, options)
		.toPromise()
		.then(
			response => response.json().data as Make[]
			)
		.catch(this.handleError);		
	}
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}