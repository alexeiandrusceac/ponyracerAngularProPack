import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PonyModel } from '../models/pony.model';
import { PonyService } from '../pony.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'pr-pony',
    template: `
        <figure (click)="clicked()" *ngIf="ponyModel">
            <img [src]="'assets/images/pony-' + this.ponyModel.color.toLowerCase() + '.gif'" [alt]="ponyModel.name"/>
            <figcaption>{{ ponyModel.name }}</figcaption>
        </figure>`,
    /*templateUrl: './pony.component.html',
    styleUrls: ['./pony.component.css']*/
})
export class PonyComponent implements OnInit {
    constructor(
        private ponyService: PonyService,
        private route: ActivatedRoute,
    ) {

    }

    @Input() ponyModel!: PonyModel;

    @Output() readonly ponyClicked = new EventEmitter<PonyModel>();

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('ponyID');

        if (!this.ponyModel) {
            this.ponyService.get(id).subscribe(ponyModel => this.ponyModel = ponyModel);
        }
    }

    getPonyImageUrl(): string {
        return `assets/images/pony-${this.ponyModel.color.toLowerCase()}.gif`;
    }

    clicked(): void {
        this.ponyClicked.emit(this.ponyModel);
    }
}
