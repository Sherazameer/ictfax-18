import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Provider } from './provider';
import { AppService } from '../../../app/app.service';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class ProviderService {

  aProvider: Provider[]= [];
  provider_id: any= null;
  provider: Provider= new Provider;

  constructor(private http: HttpClient, private app_service: AppService) {}

  get_ProviderList(): Promise<Provider[]> {
    const headers = this.app_service.createAuthorizationHeader();
    return this.http.get<Provider[]>(this.app_service.apiUrlProviders, { headers })
        .toPromise()
        .catch(error => this.handleError(error));
  }

  get_ProviderData(provider_id): Promise<Provider> {
    const headers = this.app_service.createAuthorizationHeader();
    const url5 = `${this.app_service.apiUrlProviders}/${provider_id}`;
    return this.http.get<Provider>(url5, { headers })
        .toPromise()
        .catch(error => this.handleError(error));
  }

  add_Provider(provider: Provider): Promise<Provider> {
    const headers = this.app_service.createAuthorizationHeader();
    const body = JSON.stringify(provider);
    const addUrl = `${this.app_service.apiUrlProviders}`;
    return this.http.post<Provider>(addUrl, provider, { headers })
    .toPromise()
    .catch(error => this.handleError(error));
  }

  update_Provider(provider: Provider): Promise<Provider> {
    const headers = this.app_service.createAuthorizationHeader();
    const body = JSON.stringify(provider);
    const updateUrl = `${this.app_service.apiUrlProviders}/${provider.provider_id}`;
    return this.http.put<Provider>(updateUrl, provider, { headers })
        .toPromise()
        .catch(error => this.handleError(error));
  }

  delete_Provider(provider_id): Promise<any> {
    const headers = this.app_service.createAuthorizationHeader();
    const deleteUrl = `${this.app_service.apiUrlProviders}/${provider_id}`;
    return this.http.delete(deleteUrl, { headers })
    .toPromise()
    .then(response => {
        return response;
    })
    .catch(error => this.app_service.handleError(error));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
