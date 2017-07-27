import { AttendeeDetailComponent } from './attendees/attendee-detail/attendee-detail.component';
import { AttendeesComponent } from './attendees/attendees.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
    { path: 'attendees', component: AttendeesComponent },
    { path: 'attendees/:id', component: AttendeeDetailComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AttendeesRoutingModule {}
