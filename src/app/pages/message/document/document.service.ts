import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import {Document} from './document';
import {AppService} from '../../../../app/app.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import * as FileSaver from 'file-saver';
import { getFileNameFromResponseContentDisposition, saveFile } from '../../../file-download-helper';


@Injectable()

export class DocumentService {

  aDocument: Document[] = [];
  document_id:any =null;
  document: Document = new Document;
  URL: string;

  

  constructor(private http: HttpClient, private app_service: AppService) { 

  this.URL = `${this.app_service.apiUrlDocument}/${this.document_id}/media`;
}

  get_DocumentList(): Promise<Document[]> {
    const headers = this.app_service.createAuthorizationHeader();
    return this.http.get<Document[]>(this.app_service.apiUrlDocument, { headers })
    .toPromise()
      .then(response => response)
      .catch(this.app_service.handleError.bind(this.app_service));
  }

  get_DocumentData(document_id): Promise<Document> {
    const headers = this.app_service.createAuthorizationHeader();
    const url5 = `${this.app_service.apiUrlDocument}/${document_id}`;
    return this.http.get<Document>(url5, { headers })
    .toPromise()
    .then(response => response)
    .catch(this.app_service.handleError.bind(this.app_service));
  }

  get_ViewFaxDocument(document_id): any {
    const headers = this.app_service.createAuthorizationHeader();
    const url = `${this.app_service.apiUrlDocument}/${document_id}/media`;
    return this.http.get(url, { headers, responseType: 'blob' }).toPromise()
    .catch(error => this.app_service.handleError(error));
  }

    get_Documentdownload(document_id: string): Promise<void> {
    const headers = this.app_service.createAuthorizationHeader();
    const url = `${this.app_service.apiUrlDocument}/${document_id}/media`;
    return this.http.get<Blob>(url, { headers, observe: 'response', responseType: 'blob' as 'json' }).toPromise()
    .then(res => {
      const fileName = getFileNameFromResponseContentDisposition(res);
      saveFile(res.body, fileName);
    })
    .catch(error => {
      this.app_service.downloadError(error);
    });
  }

  add_Document(document: Document) {
    const headers = this.app_service.createAuthorizationHeader();
    return this.http.post<Document>(this.app_service.apiUrlDocument, document, { headers }).toPromise()
    .catch(error => this.app_service.handleError(error));
  }

  update_Document(document: Document): Promise<Document> {
    const headers = this.app_service.createAuthorizationHeader();
    const body = JSON.stringify(document);
    const updateDocumentUrl = `${this.app_service.apiUrlDocument}/${document.document_id}`;
    return this.http.put<Document>(updateDocumentUrl, document, { headers }).toPromise()
    .catch(error => this.handleError(error));
  }

  upload_Document(document: Document): Promise<Document> {
    const headers = this.app_service.createAuthorizationHeader();
    const body = JSON.stringify(document);
    const uploadDocumentUrl = `${this.app_service.apiUrlDocument}/${document.document_id}/media`;
    return this.http.put<Document>(uploadDocumentUrl, document, { headers }).toPromise()
    .catch(error => this.handleError(error));
  }

  delete_Document(document_id): Promise<any> {
    const headers = this.app_service.createAuthorizationHeader();
    const deleteDocumentUrl = `${this.app_service.apiUrlDocument}/${document_id}`;
    return this.http.delete(deleteDocumentUrl, { headers }).toPromise()
    .catch(error => this.app_service.handleError(error));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
