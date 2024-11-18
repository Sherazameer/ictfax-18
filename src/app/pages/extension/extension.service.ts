import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Extension } from './extension';
import { AppService } from '../../../app/app.service';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class ExtensionService {

  aExtension: Extension[]= [];
  account_id: any= null;
  extension: Extension= new Extension;

  constructor(private http: HttpClient, private app_service: AppService) {}

  get_ExtensionList(): Promise<Extension[]> {
    const headers = this.app_service.createAuthorizationHeader();
    const getUrl = `${this.app_service.apiUrlAccounts}?type=extension`;
    return this.http.get<Extension[]>(getUrl, { headers })
    .toPromise()
      .then(response => response)
      .catch(this.app_service.handleError.bind(this.app_service));
  }

  get_ExtensionData(account_id: any): Promise<Extension> {
    const headers = this.app_service.createAuthorizationHeader();
    const url5 = `${this.app_service.apiUrlAccounts}/${account_id}`;
    return this.http.get<Extension>(url5, { headers }).toPromise()
      .then(response => response)
      .catch(this.app_service.handleError.bind(this.app_service));
  }

  add_Extension(account: Extension): Promise<Extension> {
    const headers = this.app_service.createAuthorizationHeader();
    const body = JSON.stringify(account);
    const addUrl = `${this.app_service.apiUrlAccounts}`;
    return this.http.post<Extension>(addUrl, body, { headers }).toPromise()
      .then(response => response)
      .catch(this.app_service.handleError.bind(this.app_service));
  }

  update_Extension(account: Extension): Promise<Extension> {
    const headers = this.app_service.createAuthorizationHeader();
    const body = JSON.stringify(account);
    const updateUrl = `${this.app_service.apiUrlAccounts}/${account.account_id}`;
    return this.http.put<Extension>(updateUrl, body, { headers }).toPromise()
      .then(response => response)
      .catch(this.app_service.handleError.bind(this.app_service));
  }

  delete_Extension(account_id: any): Promise<any> {
    const headers = this.app_service.createAuthorizationHeader();
    const deleteUrl = `${this.app_service.apiUrlAccounts}/${account_id}`;
    return this.http.delete(deleteUrl, { headers }).toPromise()
      .then(response => response)
      .catch(this.app_service.handleError.bind(this.app_service));
  }

  get_Settings(account_id: any): Promise<any> {
    const headers = this.app_service.createAuthorizationHeader();
    const url5 = `${this.app_service.apiUrlAccounts}/${account_id}/settings/emailtofax_coversheet`;
    return this.http.get(url5, { headers }).toPromise()
      .then(response => response)
      .catch(this.app_service.handleError.bind(this.app_service));
  }

  update_Settings(account_id: any, settings: any): Promise<any> {
    const headers = this.app_service.createAuthorizationHeader();
    const body = JSON.stringify(settings);
    const updateUrl = `${this.app_service.apiUrlAccounts}/${account_id}/settings/emailtofax_coversheet`;
    return this.http.put(updateUrl, body, { headers }).toPromise()
      .then(response => response)
      .catch(this.app_service.handleError.bind(this.app_service));
  }

  delete_Settings(account_id: any): Promise<any> {
    const headers = this.app_service.createAuthorizationHeader();
    const deleteUrl = `${this.app_service.apiUrlAccounts}/${account_id}/settings/emailtofax_coversheet`;
    return this.http.delete(deleteUrl, { headers }).toPromise()
      .then(response => response)
      .catch(this.app_service.handleError.bind(this.app_service));
  }


  handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
