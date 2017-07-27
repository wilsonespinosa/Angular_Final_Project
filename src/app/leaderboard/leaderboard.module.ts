import { NotMissAssignmentDirective } from './../business/not-miss-assignment.directive';
import { MissAssignmentDirective } from './../business/miss-assignment.directive';
import { TopScoreDirective } from './../business/top-score.directive';
import { MissedPipe } from './../business/missed.pipe';
import { DeliveredPipe } from './../business/delivered.pipe';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BrowserModule } from '@angular/platform-browser';
import {MdRadioModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    NgxDatatableModule,
    MdRadioModule
  ],
  declarations: [LeaderboardComponent, DeliveredPipe,
    MissedPipe,
    TopScoreDirective,
    MissAssignmentDirective,
    NotMissAssignmentDirective]
})
export class LeaderboardModule { }
