import { ApiService } from './../business/mocks/api.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';

import { AttendeesModule } from './../attendees/attendees.module';
import { LeaderboardModule } from './../leaderboard/leaderboard.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdIconModule} from '@angular/material';
import { MdTooltipModule } from '@angular/material';
import { MdProgressBarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    InMemoryWebApiModule.forRoot(ApiService),
    NoopAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdIconModule,
    MdTooltipModule,
    MdProgressBarModule,
    LeaderboardModule,
    AttendeesModule

  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule { }
