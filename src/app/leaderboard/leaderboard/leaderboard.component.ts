import { Attendee } from './../../business/dto/attendee';
import { LeaderboardService } from './../../business/leaderboard.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  attendees: Observable<Attendee[]>;
  rows = [];
   enable: boolean = true;
     loadingIndicator: boolean = true;
  constructor(private router: Router,
  private leaderboardService: LeaderboardService) { 
      setTimeout(() => { this.loadingIndicator = false; }, 1500);
  }

  listRecord(): void {
    this.leaderboardService.listRecord().then(attendees => this.rows = attendees);
   }

   avg(value) {
     console.log();
     return (value.hw1 + value.hw2 + value.hw3 + value.hw4 + value.hw5) / 5;
   }
    deliv(value) {
     let cont = 0;
    if (value.hw1 > 0) {
      cont += 1;
    } if (value.hw2 > 0) {
      cont += 1;
    } if (value.hw3 > 0) {
      cont += 1;
    } if (value.hw4 > 0) {
      cont += 1;
    } if (value.hw5 > 0) {
      cont += 1;
    }
    return cont;
   }
    miss(value) {
      let cont = 0;
    if (value.hw1 === 0) {
      cont += 1;
    } if (value.hw2 === 0) {
      cont += 1;
    } if (value.hw3 === 0) {
      cont += 1;
    } if (value.hw4 === 0) {
      cont += 1;
    } if (value.hw5 === 0) {
      cont += 1;
    }
    return cont;

   }
  onActivate($event) {
    console.log($event.row.id);
     this.router.navigate(['/attendees', $event.row.id]);
  }
   setValue() {
      this.enable = !this.enable;
   }
  ngOnInit() {
     this.listRecord();
  }
}
