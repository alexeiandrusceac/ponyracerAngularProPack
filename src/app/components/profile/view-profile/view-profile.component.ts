import { Component, OnInit, Output } from '@angular/core';

@Component({
    selector: 'pr-view-profile',
    templateUrl: './view-profile.component.html',
    styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

    profile!: any;
    constructor() {
    }

    ngOnInit(): void {
      // @ts-ignore
        this.profile = JSON.parse(localStorage.getItem(JSON.parse(JSON.stringify('datasource'))));

    }



}
