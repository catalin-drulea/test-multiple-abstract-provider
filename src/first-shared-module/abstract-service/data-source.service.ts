import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class DataSourceService {
  abstract getData(): Observable<any[]>;
  abstract updateData(data: any[]): void;
}
