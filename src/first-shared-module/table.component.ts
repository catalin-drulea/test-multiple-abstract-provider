import { Component, OnInit } from '@angular/core';
import { DataSourceService } from './abstract-service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
  constructor(private dataSourceService: DataSourceService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.dataSourceService.getData().subscribe((data) => {
      // Implement logic to use the data in your table
      console.log(data);
    });
  }
}
