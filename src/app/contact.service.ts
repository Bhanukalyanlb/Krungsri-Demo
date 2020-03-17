import {Contact} from './contactform/Contact';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';

const endpont = environment.apiUrl;

export class Contactform {
  constructor(
    public conttactId: string,
    public name: string,
    public country: string,
    public subject: string,
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) {
  }

  // private contactsUrl: string;

  // constructor(private http: HttpClient) {
  //   this.contactsUrl = 'http://localhost:8083/contacts';
  // }

  // public findAll(): Observable<Contact[]> {
  //   return this.http.get<Contact[]>(this.contactsUrl);
  // }

  // public save(contact: Contact) {
  //   return this.http.post<Contact>(this.contactsUrl, contact);
  // }

  // addContact(contact: Contact): Promise<any> {
  //   return this.http.post(endpont + '/contact/add', contact).toPromise();
  // }

  getContacts(): Observable<Contact[]> {
    console.log('test call');
    return this.httpClient.get<Contact[]>('http://localhost:8083/contact/contacts');
  }

}
