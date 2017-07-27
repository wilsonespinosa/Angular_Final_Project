import { Attendee } from './../../business/dto/attendee';
import { LeaderboardService } from './../../business/leaderboard.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-attendees',
  templateUrl: './attendees.component.html',
  styleUrls: ['./attendees.component.css']
})
export class AttendeesComponent implements OnInit {
  @Input() attendee: Attendee;
  attendees: Attendee[];
  selectedAttendee: Attendee;

  constructor(private router: Router,
    private leaderboardService: LeaderboardService) { }
  listRecord(): void {
    this.leaderboardService.listRecord().then(attendees => this.attendee = attendees);
  }

  ngOnInit() {
    this.listRecord();
  }

  onSelect(attendee: Attendee): void {
    this.selectedAttendee = attendee;
  }

  gotoDetail(id): void {
    this.router.navigate(['/attendees', id]);
  }

  gotoAdd(): void {
    this.router.navigate(['/attendees', 'add']);
  }

  delete(attendee: Attendee): void {
    this.leaderboardService.deleteRecord(attendee).then(
      ok => this.leaderboardService.listRecord().then(attendees => this.attendee = attendees));
  }

}
