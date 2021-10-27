import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

import { RaceModel } from './models/race.model';

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  // tslint:disable-next-line:ban-types

  constructor(private httpClient: HttpClient) {}

  list(): Observable<Array<RaceModel>> {
     return this.httpClient.get<Array<RaceModel>>('https://ponyracer.ninja-squad.com/api/races', { params: { status: 'PENDING' } });
  }
}
