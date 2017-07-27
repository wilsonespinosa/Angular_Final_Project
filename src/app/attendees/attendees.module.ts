import { FormsModule } from '@angular/forms';
import { AttendeeDetailComponent } from './attendees/attendee-detail/attendee-detail.component';
import { AttendeesRoutingModule } from './attendees-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendeesComponent } from './attendees/attendees.component';


@NgModule({
  imports: [
    CommonModule,
     FormsModule,
    AttendeesRoutingModule
  ],
  declarations: [AttendeesComponent, AttendeeDetailComponent]
})
export class AttendeesModule { }
