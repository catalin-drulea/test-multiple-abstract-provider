import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataSourceService } from '../../../first-shared-module/abstract-service';

@Injectable({
  providedIn: 'root',
})
export class FirstDataSourceService extends DataSourceService {
  constructor() {
    super();
    console.log('first data source service');
  }
  private data: any[] = [1,2,3,4,5];

  getData(): Observable<any[]> {
    return of(this.data);
  }

  updateData(data: any[]): void {
    this.data = data;
  }
}
