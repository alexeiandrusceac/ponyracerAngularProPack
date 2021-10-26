import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PonyModel} from './models/pony.model';

@Injectable({
  providedIn: 'root'
})
export class PonyService {

  constructor(private httpClient: HttpClient) { }
  get(id: string| null| undefined): Observable<PonyModel> {
    return this.httpClient.get<PonyModel>('https://ponyracer.ninja-squad.com/api/ponies?id=id');
  }
}
