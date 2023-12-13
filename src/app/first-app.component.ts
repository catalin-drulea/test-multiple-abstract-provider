import { Component } from '@angular/core';
import { FirstDataSourceService } from './services/first-extended-service/first-data-source.service';
import { DataSourceService } from '../first-shared-module/abstract-service/data-source.service';

@Component({
  selector: 'app-first-another',
  template: `<app-table></app-table>`,
  providers: [
    { provide: DataSourceService, useClass: FirstDataSourceService },
  ],
})
export class FirstAnotherComponent {
  constructor() {
    console.log('first another component');
  }
}
