import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { isDeclaration } from '@angular/compiler-cli/src/ngtsc/util/src/typescript';

@Component({
    selector: 'pr-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'ponyracerAngularProPack';
    date: Date | undefined;

    // tslint:disable-next-line:typedef
    ngOnInit() {}
}
