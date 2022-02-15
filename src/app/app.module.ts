import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { RacesComponent } from './components/races/races.component';
import { RaceComponent } from './components/race/race.component';
import { PonyComponent } from './components/pony/pony.component';
import { FromNowPipe } from './from-now.pipe';
import { PonyracerviewComponent } from './components/ponyracerview/ponyracerview.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { PonyReusableComponentComponent } from './components/pony-reusable-component/pony-reusable-component.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PracticeComponent } from './components/practice/practice.component';
import { CreateProfileComponent } from './components/profile/create-profile/create-profile.component';
import { ViewProfileComponent } from './components/profile/view-profile/view-profile.component';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        RacesComponent,
        RaceComponent,
        PonyComponent,
        FromNowPipe,
        PonyracerviewComponent,
        PonyReusableComponentComponent,
        RegisterFormComponent,
        LoginFormComponent,
        PracticeComponent,
        CreateProfileComponent,
        ViewProfileComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(ROUTES),
        MatTabsModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        NgMaterialModule,
        MatCheckboxModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
