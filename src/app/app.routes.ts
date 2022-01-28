import { PonyracerviewComponent } from './ponyracerview/ponyracerview.component';
import { Routes } from '@angular/router';
import { RacesComponent } from './races/races.component';
import { PonyComponent } from './pony/pony.component';
import { RegisterFormComponent } from './register-form/register-form.component';

import { PracticeComponent } from './practice/practice.component';

export const ROUTES: Routes = [
    { path: '', component: PracticeComponent },
    { path: 'races', component: RacesComponent },
    { path: 'races/:raceID/ponies/:ponyID', component: PonyComponent },
    { path: 'register', component: RegisterFormComponent }
];
