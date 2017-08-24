import { Injectable }    from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MessageService {

  private apiUrl = 'https://aposirsi.herokuapp.com/api';  // URL to web api
  //private apiUrl = 'http://localhost:3000/api';  // URL for development

  constructor(
    private http: Http
  ) {}

  createAuthorizationHeader(headers: Headers) {
    headers.append('user', '1');
    headers.append('Content-Type',
       'application/x-www-form-urlencoded');
  }

  sendMessage(value: Object): Promise<any> {
    let apiUrl = this.apiUrl.concat('/message');
    let headers = new Headers();
    const body = new URLSearchParams();
    Object.keys(value).forEach(key => {
      body.set(key, value[key]);
    });
    this.createAuthorizationHeader(headers);

    let options = new RequestOptions({ headers: headers });
    return this.http.post(apiUrl,body.toString(), options)
               .toPromise()
               .then(
                 response => response.json()
               )
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
