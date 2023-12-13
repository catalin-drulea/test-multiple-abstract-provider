import { Component } from '@angular/core';
import { DataSourceService } from '../first-shared-module/abstract-service/data-source.service';
import { SecondDataSourceService } from './services/second-extended-service/second-data-source.service';

@Component({
  selector: 'app-second-another',
  template: `<app-table></app-table>`,
  providers: [
    { provide: DataSourceService, useClass: SecondDataSourceService },
  ],
})
export class SecondAnotherComponent {
  constructor() {
    console.log('second another component');
  }
}
