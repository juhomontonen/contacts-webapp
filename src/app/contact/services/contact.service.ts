import {Injectable} from '@angular/core';
import {Contact} from '../contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[];

  constructor() {
    this.contacts = [];
    this.contacts.push(new Contact(1, 'Sami', 'Suomalainen'));
    this.contacts.push(new Contact(1, 'Juho', 'Montonen'));
    this.contacts.push(new Contact(2, 'Pekka', 'Makkonen'));
  }

  getContacts(): Contact[] {
    return this.contacts;
  }

}

