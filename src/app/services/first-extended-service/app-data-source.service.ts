import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataSourceService } from '../../../first-shared-module/abstract-service';

@Injectable({
  providedIn: 'root',
})
export class AppDataSourceService extends DataSourceService {
  constructor() {
    super();
    console.log('app data source service');
  }
  private data: any[] = [];

  getData(): Observable<any[]> {
    return of(this.data);
  }

  updateData(data: any[]): void {
    this.data = data;
  }
}
