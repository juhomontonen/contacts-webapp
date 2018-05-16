import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Contact} from '../contact';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';


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
}
