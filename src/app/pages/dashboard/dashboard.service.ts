import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppService } from '../../app.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DashboardService {

  constructor(private http: HttpClient, private app_service: AppService) { }

  get_Statistics(): Promise<any> {
    const headers = this.app_service.createAuthorizationHeader();
    return this.http.get(this.app_service.apiUrlDashboard, { headers })
      .toPromise()
      .catch(error => this.app_service.handleError(error));
  }

  get_didStat(): Promise<any> {
    const headers = this.app_service.createAuthorizationHeader();
    const url = `${this.app_service.apiUrlDashboard}?account_type=did`;
    return this.http.get(url,  { headers })
      .toPromise()
      .catch(error => this.app_service.handleError(error));
  }

  get_outFaxStat(): Promise<any> {
    const headers = this.app_service.createAuthorizationHeader();
    const url = `${this.app_service.apiUrlDashboard}?service_flag=2`;
    return this.http.get(url,  { headers })
      .toPromise()
      .catch(error => this.app_service.handleError(error));
  }
}