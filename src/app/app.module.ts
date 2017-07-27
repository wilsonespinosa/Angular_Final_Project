import { ApiService } from './business/mocks/api.service';
import { LeaderboardService } from './business/leaderboard.service';
import { AppRoutingModule } from './home/app-routing.module';
import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MdSidenavModule } from '@angular/material';
import { MdButtonModule, MdCheckboxModule, MdIconModule} from '@angular/material';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TopScoreDirective } from './business/top-score.directive';
import { MissAssignmentDirective } from './business/miss-assignment.directive';
import { NotMissAssignmentDirective } from './business/not-miss-assignment.directive';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MdSidenavModule,
    MdButtonModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [LeaderboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
