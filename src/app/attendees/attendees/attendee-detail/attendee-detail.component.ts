import { LeaderboardService } from './../../../business/leaderboard.service';
import { Attendee } from './../../../business/dto/attendee';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';
import { RequestOptions } from '@angular/http/src';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-attendee-detail',
  templateUrl: './attendee-detail.component.html',
  styleUrls: ['./attendee-detail.component.css']
})
export class AttendeeDetailComponent implements OnInit {
  @Input() attendee: Attendee;
  attendees: Observable<Attendee[]>;
  selectedAttendee: Attendee;
  id: string;
  fecha: string;
  lastActivityTime: Date;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private leaderboardService: LeaderboardService) { }

  ngOnInit() {

    this.route.params.forEach((params: Params) => this.id = params['id']);
    if (this.id === 'add') {
      const currentDate = new Date();
      this.lastActivityTime = currentDate;
      const datePipe = new DatePipe('en-US');
      this.fecha = datePipe.transform(currentDate, 'yyyy-MM-dd');
      this.attendee = new Attendee(null, null, null, 'new-silueta.jpg', this.fecha, null, null, null, null, null);
      console.log(this.attendee)
    } else {
      this.leaderboardService.getRecordById(this.id).then(attendee => this.attendee = attendee);
    }
  }
  onSubmit() {
    if (this.id === 'add') {
      this.leaderboardService.createRecord(this.attendee).then(attendees => this.router.navigateByUrl('/attendees'));
    } else {
      this.leaderboardService.updateRecord(this.attendee).then(attendees => this.router.navigateByUrl('/attendees'));
    }
  }
}
