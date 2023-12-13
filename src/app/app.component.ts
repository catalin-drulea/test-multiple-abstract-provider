import 'zone.js/dist/zone';
import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnChanges {
  name = 'Angular';
  public firstString: string;
  public counter: number;

  constructor() {
  }

  ngOnChanges() {}
}
