import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Contact} from '../contact';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {projection} from '@angular/core/src/render3/instructions';
import {post} from 'selenium-webdriver/http';


@Injectable({
  providedIn: 'root'
})
export class ContactHttpService {

  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = environment.apiendpointurl;
  }

  get(): Observable<Contact[]> {
    return this.httpClient.get(this.url).pipe(map(response => {
      return response as Contact[];
    }));
  }

  getById(id): Observable<Contact> {
    return this.httpClient.get(this.url + '/' + id).pipe(map(response => {
     return response as Contact;
    }));
  }

  put(contact): Observable<Contact> {
    return this.httpClient.put(this.url + '/' + contact.id, contact).pipe(map(response => {
      return response as Contact;
    }));
  }

  post(contact): Observable<Contact> {
      return this.httpClient.put(this.url + '/' + contact.id, contact).pipe(map(response => {
        return response as Contact;
      }));
  }
}
