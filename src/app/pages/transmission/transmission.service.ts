import {Injectable} from '@angular/core';
// import {Headers} from '@angular/http';
// import {Http, Response, HttpModule, RequestOptions} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Transmission, Program, SMSProgram, VoiceCallProgram, DocumentProgram, TemplateProgram} from './transmission';
import {AppService} from '../../../app/app.service';


import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class TransmissionService {

  aTransmission: Transmission[] = [];
  transmission_id: any = null;
  transmission: Transmission = new Transmission;
  progarm: Program = new Program;
  smsProgram: SMSProgram = new SMSProgram;
  documentProgram: DocumentProgram = new DocumentProgram;
  voiceProgram: VoiceCallProgram = new VoiceCallProgram;
  templateProgram: TemplateProgram = new TemplateProgram;
  form: any;

  constructor(private http: HttpClient, private app_service: AppService) {}
  get_OutFaxTransmissionList(): Promise<Transmission[]> {
    const headers = this.app_service.createAuthorizationHeader();
    const getUrl = `${this.app_service.apiUrlTransmission}?service_flag=2&direction=outbound`;
    
    return this.http.get<Transmission[]>(getUrl, { headers }).toPromise()
      .then(response => response)
      .catch(error => {
        this.app_service.handleError(error);
        return Promise.reject(error); // Ensure rejection is handled well
      });
  }

  get_ProgramList(): Promise<Program[]> {
    const headers = this.app_service.createAuthorizationHeader();
    
    return this.http.get<Program[]>(this.app_service.apiUrlPrograms, { headers }).toPromise()
      .then(response => response)
      .catch(error => {
        this.app_service.handleError(error);
        return Promise.reject(error);
      });
  }

  get_ProgramData(program_id: number): Promise<Program> {
    const headers = this.app_service.createAuthorizationHeader();
    const url = `${this.app_service.apiUrlPrograms}/${program_id}`;
  
    return this.http.get<Program>(url, { headers }).toPromise()
      .then(response => response)
      .catch(error => {
        this.app_service.handleError(error);
        return Promise.reject(error);
      });
  }

  add_Transmission(transmission: Transmission): Promise<number> {
    const headers = this.app_service.createAuthorizationHeader();
    
    return this.http.post<number>(this.app_service.apiUrlTransmission, transmission, { headers }).toPromise()
      .then(response => response)
      .catch(error => {
        this.app_service.handleError(error);
        return Promise.reject(error);
      });
  }

  add_senddocument(documentProgram: DocumentProgram): Promise<number> {
    const headers = this.app_service.createAuthorizationHeader();
    
    return this.http.post<number>(`${this.app_service.apiUrlPrograms}/sendfax`, documentProgram, { headers }).toPromise()
      .then(response => response)
      .catch(error => {
        this.app_service.handleError(error);
        return Promise.reject(error);
      });
  }

  delete_Program(program_id: number): Promise<any> {
    const headers = this.app_service.createAuthorizationHeader();
    const deleteUrl = `${this.app_service.apiUrlPrograms}/${program_id}`;
    
    return this.http.delete<any>(deleteUrl, { headers }).toPromise()
      .catch(error => {
        this.app_service.handleError(error);
        return Promise.reject(error);
      });
  }

  send_transmission(transmission_id: number): Promise<any> {
    const headers = this.app_service.createAuthorizationHeader();
    const sendUrl = `${this.app_service.apiUrlTransmission}/${transmission_id}/send`;
  
    return this.http.post<any>(sendUrl, {}, { headers }).toPromise()
      .catch(error => {
        this.app_service.handleError(error);
        return Promise.reject(error);
      });
  }

   handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
