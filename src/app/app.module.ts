import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FirstSharedModule } from '../first-shared-module';
import { AppComponent } from './app.component';
import { FirstAnotherComponent } from './first-app.component';
import { SecondAnotherComponent } from './second-app.component';

@NgModule({
  declarations: [AppComponent, FirstAnotherComponent, SecondAnotherComponent],
  imports: [BrowserModule, FirstSharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
