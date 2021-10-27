import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RacesComponent } from './races/races.component';
import { RaceComponent } from './race/race.component';
import { PonyComponent } from './pony/pony.component';
import { FromNowPipe } from './from-now.pipe';
import { PonyracerviewComponent } from './ponyracerview/ponyracerview.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule} from '@angular/material/tabs';
import { PonyReusableComponentComponent } from './pony-reusable-component/pony-reusable-component.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

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
    LoginFormComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(ROUTES),
        MatTabsModule,
        BrowserAnimationsModule,
        FormsModule,
        MatFormFieldModule,
        ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
