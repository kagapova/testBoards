import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {environment} from '../../../environments/environment.prod';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class CardsService {
  constructor (private readonly http: HttpClient) { }

  public getAllCards(){
    return this.http.get(`${environment.apiUrl}/todos`)
  }
}
