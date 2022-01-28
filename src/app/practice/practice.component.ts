import { Component, OnInit } from '@angular/core';
import { isAfter, isBefore } from 'date-fns';
import { logger } from 'codelyzer/util/logger';

export interface MyObject {
    id: number | string;
    name: string;
    isDeclarative?: boolean;
    latestModified: Date | null;
}

@Component({
    selector: 'pr-practice',
    templateUrl: './practice.component.html',
    styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
    showPairedNumbers = false;
    showbiglengthID = false;
    converttoObjectArray: Array<any> = [];
    pairedNumbers = '';
    pairedNumbersArray: Array<MyObject> = [];
    bigNameLengthArray: Array<MyObject> = [];
    mergedArrays: Array<any> = [];
    newArray = '';
    array = '';
    bigNameLength: Array<MyObject> = [];
    arrayWithObjects: Array<MyObject> = [
        { id: 112, name: 'Objasdhuidahiu 1', latestModified: null },
        { id: 9, name: 'Obj 2', latestModified: null },
        { id: 6, name: 'Objasdadad 3', latestModified: null },
        { id: 489, name: 'Obj 4', latestModified: null },
        { id: 562, name: 'Objadsasda 5', latestModified: null },
        { id: 3, name: 'Obj 6', latestModified: null },
        { id: 784, name: 'Osdaasb', latestModified: null },
        { id: 11, name: 'Obj 8', latestModified: null },
        { id: 10, name: 'Objadsadasds 9', latestModified: null },
        { id: 1107, name: 'Obj 10', latestModified: null }
    ];

    constructor() {}

    ngOnInit(): void {
        console.log(this.arrayWithObjects);
        logger.info('saudhauhdsuahdas');
        this.multiply();
    }

    viewPairedNumbers(): void {
        this.showPairedNumbers = true;

        this.pairedNumbersArray = this.arrayWithObjects.map(item => {
            const isPaired = (item.id as number) % 2 === 0;
            return {
                id: isPaired ? item.id.toString() : item.id,
                name: item.name,
                latestModified: isPaired ? new Date() : item.latestModified
            };
        });

        console.log('Punct 1');
        console.log(this.pairedNumbersArray);
    }

    viewNewArray(): void {
        this.bigNameLengthArray
            .sort((a, b) => {
                const startLatestModified = a.latestModified;
                const endLatestModified = b.latestModified;

                if (!endLatestModified) {
                    return -1;
                }

                if (!startLatestModified) {
                    return 1;
                }

                // @ts-ignore
                if (isAfter(startLatestModified, endLatestModified)) {
                    return -1;
                }

                // @ts-ignore
                if (isBefore(startLatestModified, endLatestModified)) {
                    return 1;
                }
            })
            .map(item => {
                this.converttoObjectArray.push({
                    id: item.id,
                    name: item.name,
                    latestModified: item.latestModified,
                    isDeclarative: item.isDeclarative,
                    favorite: item.isDeclarative ? ['Me', 'You'] : ['Me']
                });
            });
        console.log('Punct 3');
        console.log('new array with is Declarative', this.converttoObjectArray);
    }

    // tslint:disable-next-line:typedef
    viewMergedArrays() {
        this.mergedArrays = [...this.bigNameLengthArray, ...this.converttoObjectArray];
        console.log('Punct 4');
        console.log(this.mergedArrays);
    }
    // tslint:disable-next-line:typedef
    viewnoDeclarative() {
        // tslint:disable-next-line:no-shadowed-variable
        this.converttoObjectArray.map(item => {
            delete item.isDeclarative;
            return item;
        });
        console.log('Punct 3b');
        console.log('new array without is Declarative', this.converttoObjectArray);
    }

    // tslint:disable-next-line:typedef
    viewLengthID() {
        this.showbiglengthID = true;
        // @ts-ignore
        this.bigNameLengthArray = this.pairedNumbersArray.map(item => {
            const isNameLengthBiggerID = item.id < item.name.length;
            return {
                id: item.id,
                name: item.name,
                isDeclarative: isNameLengthBiggerID,
                latestModified: isNameLengthBiggerID ? new Date() : item.latestModified
            };
        });
        // @ts-ignore
        console.log('Punct 2');
        console.log(this.bigNameLengthArray);
    }

    // tslint:disable-next-line:typedef
    viewThreeConsole() {
        console.log('Punct 5');
        console.log(this.mergedArrays.filter(item => item.isDeclarative));
        console.log(this.mergedArrays.filter(item => item.favorite?.includes('You')));
        console.log(this.mergedArrays.filter(item => item.name.length > 10));
    }

    multiply(): any{
        // @ts-ignore
        console.log(this.arrayWithObjects.filter(x => x.id % 2 === 1).map(x => x.id * 2));
    }
}
