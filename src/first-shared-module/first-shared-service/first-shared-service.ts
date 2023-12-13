import { Injectable } from '@angular/core';
import { interval, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirstSharedService {
  // private myFirstVariable: string;
  // private myFirstCounter;
  // private interval: any;
  // constructor() {
  //   this.onStart();
  // }
  // private onStart(): void {
  //   this.myFirstVariable = 'my first string';
  //   this.myFirstCounter = 0;
  //   this.interval = setInterval(() => {
  //     console.log(this.myFirstCounter);
  //     this.myFirstCounter += 1;
  //   }, 3000);
  // }
  // public getFirstVariable(): string {
  //   return this.myFirstVariable;
  // }
  // public getFirstCounterValue(): number {
  //   return this.myFirstCounter;
  // }
}
