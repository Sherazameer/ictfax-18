import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {SendFax, DocumentProgram} from './sendfax';
import {AppService} from '../../../app/app.service';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class SendFaxService {
  get_ConatctList() {
    throw new Error('Method not implemented.');
  }

  aSendFax: SendFax[] = [];
  transmission_id: any = null;
  sendfax: SendFax = new SendFax;
  documentProgram: DocumentProgram = new DocumentProgram;
  form: any;

  constructor(private http: HttpClient, private app_service: AppService) {}

  get_OutFaxTransmissionList(): Promise<SendFax[]> {
    const headers = this.app_service.createAuthorizationHeader();
    const getUrl = `${this.app_service.apiUrlTransmission}?service_flag=2&direction=outbound`;
    return this.http.get<SendFax[]>(getUrl, { headers }).toPromise()
    .then(response => response as SendFax[])
    .catch(error => this.handleError(error));
  }

  add_SendFax(sendfax: SendFax): Promise<number> {
    const headers = this.app_service.createAuthorizationHeader();
    const body = JSON.stringify(sendfax);
    const addTransmissionUrl = `${this.app_service.apiUrlTransmission}`;
    return this.http.post<number>(addTransmissionUrl, sendfax, { headers }).toPromise()
    .catch((error) => this.handleError(error));
  }

  get_AccountList(): Promise<any[]> {
    const headers = this.app_service.createAuthorizationHeader();
    const getUrl = `${this.app_service.apiUrlAccounts}`;
    return this.http.get<any[]>(getUrl, { headers }).toPromise()
    .catch(error => this.handleError(error));
  }

  add_senddocument(documentProgram: DocumentProgram): Promise<number> {
    const headers = this.app_service.createAuthorizationHeader();
    const body = JSON.stringify(documentProgram);
    const addSendFaxUrl = `${this.app_service.apiUrlPrograms}/sendfax`;
    return this.http.post<number>(addSendFaxUrl, documentProgram, { headers }).toPromise()
      .catch((error) => this.handleError(error));
  }

  delete_Document(transmission_id): Promise<any> {
    const headers = this.app_service.createAuthorizationHeader();
    const deletetransmissionUrl = `${this.app_service.apiUrlTransmission}/${transmission_id}`;
    return this.http.delete<void>(deletetransmissionUrl, { headers }).toPromise()
      .catch((error) => this.app_service.handleError(error));
  }

  send_transmission(transmission_id): Promise<any> {
    const headers = this.app_service.createAuthorizationHeader();
    const sendurl = `${this.app_service.apiUrlTransmission}/${transmission_id}/send`;
    return this.http.post<SendFax>(sendurl, {}, { headers }).toPromise()
      .catch((error) => this.app_service.handleError(error));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
