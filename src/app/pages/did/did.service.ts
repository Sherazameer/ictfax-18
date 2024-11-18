import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DID } from './did';
import { AppService } from '../../../app/app.service';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class DIDService {

  aDID: DID[]= [];
  account_id: any= null;
  did: DID= new DID;

  constructor(private http: HttpClient, private app_service: AppService) {}

  get_DIDList(): Promise<DID[]> {
    const headers = this.app_service.createAuthorizationHeader();
    return this.http.get<DID[]>(this.app_service.apiUrlDid, { headers })
      .toPromise()
      .catch(this.app_service.handleError.bind(this.app_service));
  }


  get_DIDData(account_id: any): Promise<DID> {
    const headers = this.app_service.createAuthorizationHeader();
    const url5 = `${this.app_service.apiUrlAccounts}/${account_id}`;
    return this.http.get<DID>(url5, { headers })
      .toPromise()
      .catch(this.app_service.handleError.bind(this.app_service));
  }


  add_DID(did: DID): Promise<DID> {
    const headers = this.app_service.createAuthorizationHeader();
    const body = JSON.stringify(did);
    const addUrl = this.app_service.apiUrlDid;
    return this.http.post<DID>(addUrl, body, { headers })
      .toPromise()
      .catch(this.app_service.handleError.bind(this.app_service));
  }

  update_DID(did: DID): Promise<DID> {
    const headers = this.app_service.createAuthorizationHeader();
    const body = JSON.stringify(did);
    const updateUrl = `${this.app_service.apiUrlAccounts}/${did.account_id}`;
    return this.http.put<DID>(updateUrl, body, { headers })
      .toPromise()
      .catch(this.app_service.handleError.bind(this.app_service));
  }

  assign_DID(did: DID): Promise<DID> {
    const headers = this.app_service.createAuthorizationHeader();
    const body = JSON.stringify(did);
    const assignUrl = `${this.app_service.apiUrlAccounts}/${did.account_id}/users/${did.user_id}`;
    return this.http.put<DID>(assignUrl, body, { headers })
      .toPromise()
      .catch(this.app_service.handleError.bind(this.app_service));
  }

  send_program(did: any): Promise<DID> {
    const headers = this.app_service.createAuthorizationHeader();
    const body = JSON.stringify(did);
    const sendProUrl = `${this.app_service.apiUrlPrograms}/faxtoemail`;
    return this.http.post<DID>(sendProUrl, body, { headers })
      .toPromise()
      .catch(this.app_service.handleError.bind(this.app_service));
  }


  unassign_DID(did: any): Promise<any> {
    const headers = this.app_service.createAuthorizationHeader();
    const deleteUr = `${this.app_service.apiUrlAccounts}/${did.account_id}/users`;
    return this.http.delete(deleteUr, { headers })
      .toPromise()
      .catch(this.app_service.handleError.bind(this.app_service));
  }

  delete_DID(account_id: any): Promise<any> {
    const headers = this.app_service.createAuthorizationHeader();
    const deleteUrl = `${this.app_service.apiUrlAccounts}/${account_id}`;
    return this.http.delete(deleteUrl, { headers })
      .toPromise()
      .catch(this.app_service.handleError.bind(this.app_service));
  }


  batch_did(did: any): Promise<any> {
    const headers = this.app_service.createAuthorizationHeader();
    const body = JSON.stringify(did);
    const batchUrl = this.app_service.apiUrlAccounts;
    return this.http.post(batchUrl, body, { headers })
      .toPromise()
      .catch(this.app_service.handleError.bind(this.app_service));
  }

  no_service(account_id: any){
    const headers = this.app_service.createAuthorizationHeader();
    const noServUrl = `${this.app_service.apiUrlAccounts}/${account_id}/programs`;
    return this.http.delete(noServUrl, { headers })
      .toPromise()
      .catch(this.app_service.handleError.bind(this.app_service));
  }


   handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
