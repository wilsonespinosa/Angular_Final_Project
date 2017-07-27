
import { HomeComponent } from './home/home.component';
import { LeaderboardComponent } from './../leaderboard/leaderboard/leaderboard.component';
import { AttendeesComponent } from './../attendees/attendees/attendees.component';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AttendeeDetailComponent } from 'app/attendees/attendees/attendee-detail/attendee-detail.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'attendees', component: AttendeesComponent },
    { path: 'attendees/:id', component: AttendeeDetailComponent },
    { path: 'attendees/:add', component: AttendeeDetailComponent },
    { path: 'leaderboard', component: LeaderboardComponent },
    { path: '**', component: HomeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
