import { Component } from '@angular/core';
import { AppDataSourceService } from './services/first-extended-service/app-data-source.service';
import { DataSourceService } from '../first-shared-module/abstract-service/data-source.service';

@Component({
  selector: 'app-first-another',
  template: `<app-table></app-table>`,
  providers: [
    // Provide a different extension for DataSourceService at the component level
    { provide: DataSourceService, useClass: AppDataSourceService },
  ],
})
export class FirstAnotherComponent {
  constructor() {
    console.log('first another component');
  }
}
