import { Component, OnInit } from '@angular/core';
import { RaceModel } from '../models/race.model';
import { HttpService } from '../services/http.service';
import { StatusEnum } from '../status.enum';

@Component({
    selector: 'pr-races',
    templateUrl: './races.component.html',
    styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {
    races: Array<RaceModel> = [];
    constructor(private raceService: HttpService) {}

    ngOnInit(): void {
        this.raceService.getListOfRacesByStatus(StatusEnum.PENDING).subscribe(races => {
            this.races = races;
        });
    }
}
