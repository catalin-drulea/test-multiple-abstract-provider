import { NgModule } from '@angular/core';
import { TableComponent } from '.';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule],
  providers: [],
  exports: [TableComponent]
})
export class FirstSharedModule {}
