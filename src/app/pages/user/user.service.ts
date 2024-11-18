import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParamsOptions } from '@angular/common/http';
import { User } from './user';
import { AppService } from '../../../app/app.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AUserService {

  aUser: User[] = [];
  user_id: any = null;
  user: User = new User;

  constructor(private http: HttpClient, private app_service: AppService) {}

  get_UserList(): Promise<User[]> {
    const headers = this.app_service.createAuthorizationHeader();
    return this.http.get<User[]>(this.app_service.apiUrlUsers, { headers })
      .toPromise()
      .catch(this.app_service.handleError.bind(this.app_service));
  }

  get_RoleList(): Promise<any> {
    const headers = this.app_service.createAuthorizationHeader();
    return this.http.get<any>(this.app_service.apiUrlRoles, { headers })
      .toPromise()
      .catch(this.app_service.handleError.bind(this.app_service));
  }

  setRole(user_id: string, role_id: string): Promise<any> {
    const headers = this.app_service.createAuthorizationHeader();
    const setRoleUrl = `${this.app_service.apiUrlUsers}/${user_id}/roles/${role_id}`;
    return this.http.put(setRoleUrl, { user_id }, { headers })
      .toPromise()
      .catch(this.app_service.handleError.bind(this.app_service));
  }

  getUserRoles(user_id: string): Promise<any> {
    const headers = this.app_service.createAuthorizationHeader();
    const url = `${this.app_service.apiUrlUsers}/${user_id}/roles`;
    return this.http.get<any>(url, { headers })
      .toPromise()
      .catch(this.app_service.handleError.bind(this.app_service));
  }

  deleteRoles(user_id: string, role_id: string): Promise<any> {
    const headers = this.app_service.createAuthorizationHeader();
    const deleteRoleUrl = `${this.app_service.apiUrlUsers}/${user_id}/roles/${role_id}`;
    return this.http.delete(deleteRoleUrl, { headers })
      .toPromise()
      .catch(this.app_service.handleError.bind(this.app_service));
  }

  get_UserData(user_id: string): Promise<User> {
    const headers = this.app_service.createAuthorizationHeader();
    const url = `${this.app_service.apiUrlUsers}/${user_id}`;
    return this.http.get<User>(url, { headers })
      .toPromise()
      .catch(this.app_service.handleError.bind(this.app_service));
  }

  add_User(user: User): Promise<User> {
    if (!user.username || !user.password || !user.email) {
        console.error("Required fields missing:", user);
        return Promise.reject("Some required fields are missing.");
    }
    const headers = this.app_service.createAuthorizationHeader();
    const addUrl = `${this.app_service.apiUrlUsers}`;
    return this.http.post<User>(addUrl, user, { headers })
        .toPromise()
        .catch(this.app_service.handleError.bind(this.app_service));
}

  update_User(user: User): Promise<User> {
        console.log("Attempting to add user:", user); // Log the user object
    const headers = this.app_service.createAuthorizationHeader();
    const updateUrl = `${this.app_service.apiUrlUsers}/${user.user_id}`;
    return this.http.put<User>(updateUrl, user, { headers })
      .toPromise()
      .catch(this.app_service.handleError.bind(this.app_service));
  }

  delete_User(user_id: string): Promise<any> {
    const headers = this.app_service.createAuthorizationHeader();
    const deleteUrl = `${this.app_service.apiUrlUsers}/${user_id}`;
    return this.http.delete(deleteUrl, { headers })
      .toPromise()
      .catch(this.app_service.handleError.bind(this.app_service));
  }

  changePass(user: User): Promise<any> {
    const headers = this.app_service.createAuthorizationHeader();
    const updateUrl = `${this.app_service.apiUrlUsers}/${user.user_id}/password`;
    return this.http.put(updateUrl, user, { headers })
      .toPromise()
      .catch(this.app_service.handleError.bind(this.app_service));
  }
  
  handleError(error: HttpErrorResponse): Promise<any> {
    console.error("An error occurred:", error.error); // Log the full error response
    return Promise.reject(error.message || error);
}

}

