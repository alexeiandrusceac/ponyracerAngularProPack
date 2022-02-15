import { Component, OnInit } from '@angular/core';
import { RaceInterface } from '../../../interfaces/race.interface';
import { HttpService } from '../../services/http.service';
import { StatusEnum } from '../../../enums/status.enum';

@Component({
    selector: 'pr-races',
    templateUrl: './races.component.html',
    styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {
    races: Array<RaceInterface> = [];
    constructor(private raceService: HttpService) {}

    ngOnInit(): void {
        this.raceService.getListOfRacesByStatus(StatusEnum.PENDING).subscribe(races => {
            this.races = races;
        });
    }
}
