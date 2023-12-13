import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataSourceService } from '../../../first-shared-module/abstract-service';

@Injectable({
  providedIn: 'root',
})
export class AnotherDataSourceService extends DataSourceService {
  private data: any[] = [];

  constructor() {
    super();
    console.log('another data source service');
  }

  getData(): Observable<any[]> {
    // Different implementation for AnotherDataSourceService
    return of(this.data.reverse()); // Reverse the data for demonstration
  }

  updateData(data: any[]): void {
    this.data = data;
  }
}
