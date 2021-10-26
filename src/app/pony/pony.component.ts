import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { PonyModel } from '../models/pony.model';
import {PonyService} from '../pony.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'pr-pony',
  templateUrl: './pony.component.html',
  styleUrls: ['./pony.component.css']
})
export class PonyComponent  implements OnInit{
  pony: any;
  constructor(private ponyService: PonyService, private route: ActivatedRoute){

  }

  @Input() ponyModel: PonyModel = {
    id: 0,
    name: '',
    color: ''
  };

  @Output() readonly ponyClicked = new EventEmitter<PonyModel>();

  ngOnInit(): void{
    const id = this.route.snapshot.paramMap.get('ponyID');

    this.ponyService.get(id).subscribe(ponyModel => this.ponyModel = ponyModel);
  }
  getPonyImageUrl(): string {
    return `assets/images/pony-${this.ponyModel.color.toLowerCase()}.gif`;
  }
  clicked(): void {
    this.ponyClicked.emit(this.ponyModel);
  }
}
