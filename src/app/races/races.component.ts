import { Component, OnInit } from '@angular/core';
import { RaceModel } from '../models/race.model';
import { RaceService } from '../race.service';
import { Router } from '@angular/router';
@Component({
  selector: 'pr-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {
  races: Array<RaceModel> = [];
  constructor(private raceService: RaceService, private router: Router) {}

  // saveAndMoveBackToHome(){
  //   this.router.navigate(['']);
  // }
  ngOnInit(): void {
    this.raceService.list().subscribe(races => {
      this.races = races;
    });
    // this.raceService.list().pipe(retry(3)).subscribe(races => {this.races = races; });
  }
}
