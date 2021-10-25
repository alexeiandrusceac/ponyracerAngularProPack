import { Component, OnInit } from '@angular/core';
import {RaceModel} from '../models/race.model';
import {RaceService} from '../race.service';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {retry} from 'rxjs/operators';

@Component({
  selector: 'pr-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {
   races: Array<RaceModel> = [];
  constructor(private raceService: RaceService) {}

  ngOnInit(): void {
      this.raceService.list().subscribe(races => {this.races = races; });
    // this.raceService.list().pipe(retry(3)).subscribe(races => {this.races = races; });
  }

}
