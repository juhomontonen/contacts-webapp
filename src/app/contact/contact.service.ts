import {Injectable} from '@angular/core';
import {Contact} from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[];

  constructor() {
    this.contacts = [];
    this.contacts.push(new Contact('Sami', 'Suomalainen'));
    this.contacts.push(new Contact('Juho', 'Montonen'));
    this.contacts.push(new Contact('Pekka', 'Makkonen'));
  }

  getContacts(): Contact[] {
    return this.contacts;
  }

}

