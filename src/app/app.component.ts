import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lastChecked: string;

  title = 'covid';

  public updateLastChecked(check) {
    this.lastChecked = check
  }

}
