import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AppService } from '../../../app/app.service';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class DefaultSettingsService {

  constructor(private http: HttpClient, private app_service: AppService) { }

  getDefConf() {

    const headers = this.app_service.createAuthorizationHeader();
    const getUrl = `${this.app_service.apiUrlAccounts}`;
    return this.http.get(getUrl, { headers })
         .toPromise()
      .then(response => response) // Use response directly
      .catch(error => this.app_service.handleError(error));
  }

}
