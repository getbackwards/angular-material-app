import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CurrentTrainingComponent} from './training/current-training/current-training.component';
import {LoginComponent} from './auth/login/login.component';
import {NewTrainingComponent} from './training/new-training/new-training.component';
import {MaterialModule} from './material.module';
import {PastTrainingComponent} from './training/past-training/past-training.component';
import {SignupComponent} from './auth/signup/signup.component';
import {TrainingComponent} from './training/training.component';
import {WelcomeComponent} from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentTrainingComponent,
    LoginComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    SignupComponent,
    TrainingComponent,
    WelcomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
