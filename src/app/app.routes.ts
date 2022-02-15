import { Routes } from '@angular/router';
import { RacesComponent } from './components/races/races.component';
import { PonyComponent } from './components/pony/pony.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { PracticeComponent } from './components/practice/practice.component';
import { CreateProfileComponent } from './components/profile/create-profile/create-profile.component';
import { ViewProfileComponent } from './components/profile/view-profile/view-profile.component';

export const ROUTES: Routes = [
    { path: 'view', component: ViewProfileComponent},
    { path: 'races', component: RacesComponent },
    { path: 'races/:raceID/ponies/:ponyID', component: PonyComponent },
    { path: 'register', component: RegisterFormComponent },
    { path: 'create-profile', component: CreateProfileComponent },
    { path: 'exercises', component: PracticeComponent }
];
