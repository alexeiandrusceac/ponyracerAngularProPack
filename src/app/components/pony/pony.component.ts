import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PonyInterface } from '../../../interfaces/pony.interface';
import { HttpService } from '../../services/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'pr-pony',
    templateUrl: './pony.component.html',
    styleUrls: ['./pony.component.css']
})
export class PonyComponent implements OnInit {
    constructor(private ponyService: HttpService, private route: ActivatedRoute) {}

    @Input() ponyModel!: PonyInterface;

    @Output() readonly ponyClicked = new EventEmitter<PonyInterface>();

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('ponyID');

        if (!this.ponyModel) {
            // this.ponyService.getPonyByID(id).subscribe(ponyModel => (this.ponyModel = ponyModel));
        }
    }

    getPonyImageUrl(): string {
        return `assets/images/pony-${this.ponyModel.color.toLowerCase()}.gif`;
    }

    clicked(): void {
        this.ponyClicked.emit(this.ponyModel);
    }
}
