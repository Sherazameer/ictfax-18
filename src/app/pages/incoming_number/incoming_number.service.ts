import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IncomingNumber } from './incoming_number';
import { AppService } from '../../../app/app.service';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class IncomingNumberService {

  constructor(private http: HttpClient, private app_service: AppService) {}

  get_List(user_id) {
    const headers = this.app_service.createAuthorizationHeader();
    const getUrl = `${this.app_service.apiUrlUsers}/${user_id}/accounts?type=did`;
    return this.http.get<IncomingNumber[]>(getUrl, { headers })
    .toPromise()
    .catch(response => this.app_service.handleError(response));
  }

  get_Data(account_id) {
    const headers = this.app_service.createAuthorizationHeader();
    const getApi = `${this.app_service.apiUrlAccounts}/${account_id}`;
    return this.http.get<IncomingNumber>(getApi, { headers })
      .toPromise()
      .catch(response => this.app_service.handleError(response));
  }

  forward_did(incoming_number) {
    const headers = this.app_service.createAuthorizationHeader();
    const body = JSON.stringify(incoming_number);
    const url = `${this.app_service.apiUrlAccounts}/${incoming_number.account_id}/programs/${incoming_number.program_name}`;
    return this.http.put(url, body, { headers })
    .toPromise()
    .catch(response => this.app_service.handleError(response));
  }

  forwardtoext(incoming_number) {
    const headers = this.app_service.createAuthorizationHeader();
    const body = JSON.stringify(incoming_number);
    const url = `${this.app_service.apiUrlPrograms}/forward`;
    return this.http.post(url, body, { headers })
    .toPromise()
    .catch(response => this.app_service.handleError(response));
  }

  update_account(account) {
    const headers = this.app_service.createAuthorizationHeader();
    const body = JSON.stringify(account);
    const updateUrl = `${this.app_service.apiUrlAccounts}/${account.account_id}`;
    return this.http.put(updateUrl, body, { headers })
    .toPromise()
    .catch(response => this.app_service.handleError(response));
  }

  handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }
}
