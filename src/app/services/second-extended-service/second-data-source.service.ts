import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataSourceService } from '../../../first-shared-module/abstract-service';

@Injectable({
  providedIn: 'root',
})
export class SecondDataSourceService extends DataSourceService {
  private data: any[] = ['a', 'b', 'c', 'd', 'e', 'f'];

  constructor() {
    super();
    console.log('second data source service');
  }

  getData(): Observable<any[]> {
    return of(this.data.reverse());
  }

  updateData(data: any[]): void {
    this.data = data;
  }
}
