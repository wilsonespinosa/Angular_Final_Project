import { Attendee } from './dto/attendee';
import { ActionsInterface } from './actions-interface';
import { Observable, Operator } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LeaderboardService implements ActionsInterface {
  private attendeesUrl = 'api/attendees';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  createRecord(object: Object):  Promise<any> {
    return this.http
      .post(this.attendeesUrl, JSON.stringify(object), { headers: this.headers })
      .toPromise()
      .then(response => response.json().data)
  }

  listRecord(): Promise<any> {
        return this.http.get(this.attendeesUrl)
         .toPromise()
         .then(response => response.json().data)
    }
 updateRecord(attendee: Attendee):  Promise<Attendee> {
   const url = `${this.attendeesUrl}/${attendee.id}`;
    return this.http
      .put(url, JSON.stringify(attendee), { headers: this.headers })
      .toPromise()
      .then(() => attendee)
  }
  deleteRecord(attendee: Attendee): Promise<Attendee> {
    const url = `${this.attendeesUrl}/${attendee.id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
  }

  getRecordById(id: string):  Promise<Attendee>  {
        const url = `${this.attendeesUrl}/${id}`;
        return this.http.get(url)
        .toPromise()
         .then(response => response.json().data)
    }

  getNextRecordId() {
    throw new Error('Method not implemented.');
  }
}
