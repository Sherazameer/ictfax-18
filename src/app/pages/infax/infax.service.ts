import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { AppService } from '../../../app/app.service';
import { getFileNameFromResponseContentDisposition, saveFile } from '../../file-download-helper';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class InFaxService {

  constructor(private app_service: AppService, private http: HttpClient) { }

      get_InFaxTransmissionList(): Promise<any> {
    const headers = this.app_service.createAuthorizationHeader();
    const getUrl = `${this.app_service.apiUrlTransmission}`;
       return this.http.get(getUrl, { headers })
      .toPromise()
      .catch(error => this.app_service.handleError(error));
  }

      get_Documentdownload(document_id: string): void {
    const headers = this.app_service.createAuthorizationHeader();
    const url = `${this.app_service.apiUrlDocument}/${document_id}/media`;
  }

    getTransmissionResult(transmission_id: string): Promise<any> {
    const headers = this.app_service.createAuthorizationHeader();
    const getUrl = `${this.app_service.apiUrlTransmission}/${transmission_id}/results?name=document`;
    return this.http.get(getUrl, { headers })
      .toPromise()
      .catch(error => this.app_service.handleError(error));
  }


    delete_Transmission(transmission_id: string): Promise<any> {
    const headers = this.app_service.createAuthorizationHeader();
    const deletetransmissionUrl = `${this.app_service.apiUrlTransmission}/${transmission_id}`;
    return this.http.delete(deletetransmissionUrl, { headers })
    .toPromise()
    .catch(error => this.app_service.handleError(error));
  }

    confirmed_Download(transmission_id: string): Promise<any> {
    const headers = this.app_service.createAuthorizationHeader();
    const confirmedtransmissionUrl = `${this.app_service.apiUrlTransmission}/downloaded/${transmission_id}`;
    return this.http.delete(confirmedtransmissionUrl, { headers })
      .toPromise()
      .catch(error => this.app_service.handleError(error));
  }
}
