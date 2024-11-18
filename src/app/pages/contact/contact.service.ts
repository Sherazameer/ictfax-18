import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from './contact';
import { AppService } from '../../../app/app.service';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class ContactService {

  aContact: Contact[]= [];
  contact_id: any= null;
  contact: Contact= new Contact;

  constructor(private http: HttpClient, private app_service: AppService) {}

  get_ContactList(): Promise<Contact[]> {
    const headers = this.app_service.createAuthorizationHeader();
    return this.http.get<Contact[]>(this.app_service.apiUrlContacts, { headers }).toPromise()
      .catch(response => this.handleError(response));
  }

  get_ContactData(contact_id): Promise<Contact> {
    const headers = this.app_service.createAuthorizationHeader();
    const url5 = `${this.app_service.apiUrlContacts}/${contact_id}`;
    return this.http.get<Contact>(url5, { headers }).toPromise()
      .catch(response => this.handleError(response));
  }

  add_Contact(contact: Contact): Promise<Contact> {
    const headers = this.app_service.createAuthorizationHeader();
    const body = JSON.stringify(contact);
    const addUrl = `${this.app_service.apiUrlContacts}`;
    return this.http.post<Contact>(addUrl, body, { headers }).toPromise()
      .catch(response => this.handleError(response));
  }

  update_Contact(contact: Contact): Promise<Contact> {
    const headers = this.app_service.createAuthorizationHeader();
    const body = JSON.stringify(contact);
    const updateUrl = `${this.app_service.apiUrlContacts}/${contact.contact_id}`;
    return this.http.put<any>(updateUrl, body, { headers }).toPromise()
      .catch(response => this.handleError(response));
  }

  delete_Contact(contact_id): Promise<Contact> {
    const headers = this.app_service.createAuthorizationHeader();
    const deleteUrl = `${this.app_service.apiUrlContacts}/${contact_id}`;
    return this.http.delete<Contact>(deleteUrl, { headers }).toPromise()
      .catch(response => this.handleError(response));
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
