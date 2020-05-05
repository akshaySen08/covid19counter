import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lastChecked: string;
  timesVisited: number = 15;
  title = 'covid';

  public updateLastChecked(check) {
    this.lastChecked = check
  }
}
