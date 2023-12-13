import { Component } from '@angular/core';
import { DataSourceService } from '../first-shared-module/abstract-service/data-source.service';
import { AnotherDataSourceService } from './services/second-extended-service/another-data-source.service';

@Component({
  selector: 'app-second-another',
  template: `<app-table></app-table>`,
  providers: [
    // Provide AnotherDataSourceService for SecondAnotherComponent
    { provide: DataSourceService, useClass: AnotherDataSourceService },
  ],
})
export class SecondAnotherComponent {
  constructor() {
    console.log('first another component');
  }
}
