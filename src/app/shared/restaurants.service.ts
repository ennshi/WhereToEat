import {Injectable} from '@angular/core';
import {Restaurant} from './interfaces';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class RestaurantsService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${environment.fbDBUrl}/restaurants.json`)
      .pipe(map((response: {[key: string]: any}) => {
        return Object
          .keys(response)
          .map( key => ({
            ...response[key]
          }));
      }));
  }
}
