import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {environment} from '../../../environments/environment.prod';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class UserService {
  constructor (private readonly http: HttpClient) { }

  public getUserInfo(id: number) {
    return this.http.get(`${environment.apiUrl}/users/${id}`);
  }

  public getUserCards(id: number){
    const params = new HttpParams().set('userId', id.toString());
    return this.http.get(`${environment.apiUrl}/todos`, {params});
  }
}
