import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { StatusEnum } from '../../enums/status.enum';
import { ProfileInterface } from '../interfaces/profile-interface';
import { map } from 'rxjs/operators';
import { DictionaryInterface } from '../interfaces/dictionary.interface';

const httpUrl = 'https://ponyracer.ninja-squad.com/api/';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    private sub = new BehaviorSubject("");
    subj$ = this.sub.asObservable();

    constructor(private httpClient: HttpClient) {}

    getListOfRacesByStatus(params: StatusEnum): Observable<any> {
        return this.httpClient.get(httpUrl + 'races', { params: { status: params.valueOf() } });
    }

    getFullListOfRaces(): Observable<any> {
        return this.httpClient.get(httpUrl + 'races');
    }
    send(value: any) {
        this.sub.next(value);
    }
    private toProfileInterface(item: any): ProfileInterface {
        if (!item) {
            return {} as ProfileInterface;
        }
        return {
            address: item.address,
            email: item.email,
            phone: item.phone,
            profession: item.profession,
            firstName: item.firstName,
            lastName: item.lastName,
            educationArray: item.educationArray,
            jobArray: item.jobArray,
            socialMediaArray: item.socialMediaArray,

        };
    }

    saveProfileData(key: string, data: any): void {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (e) {
            console.log('error saving to localStorage,', e);
        }
    }

    getProfileData(): Observable<any> {
        return localStorage.watch('dataSource').pipe(
            map(response => {
                // @ts-ignore
                if (response.data) {
                    // @ts-ignore
                    response.map((item: DictionaryInterface<any>) => this.toProfileInterface(item));
                }
            })
        );
    }
}
