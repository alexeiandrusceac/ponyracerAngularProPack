import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RaceModel } from '../models/race.model';
import { StatusEnum } from '../status.enum';
import { PonyModel } from '../models/pony.model';

const httpUrl = 'https://ponyracer.ninja-squad.com/api/';
@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private httpClient: HttpClient) {}

    getListOfRacesByStatus(params: StatusEnum): Observable<any> {
        return this.httpClient.get<Array<RaceModel>>(httpUrl + 'races', { params: { status: params.valueOf() } });
    }

    getFullListOfRaces(): Observable<Array<PonyModel>> {
        return this.httpClient.get<Array<PonyModel>>(httpUrl + 'races');
    }
}
