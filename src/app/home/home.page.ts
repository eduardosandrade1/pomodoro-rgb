import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  newMinutes:number = 25;
  newSeconds:number = 1;
  minutes:number = this.newMinutes;
  seconds:number = this.newSeconds;
  contagem:string;
  runSecond:number;
  startClick:number = 0;
  constructor() {

  }

  validateMaxLenghtHour(hour:number) {
    if (hour > 60) {
      this.minutes = 0;
    }
  }

  validateMaxLenghtSecond(seconds:number) {
    if (seconds > 60) {
      this.seconds = 0;
    }
  }

  startCounter () {
    if (this.startClick == 0) {
      if (this.seconds > 0) {
        setTimeout(() => {
          this.contagem   = this.minutes + ":" + this.seconds;
          this.seconds    -= 1;
          this.startClick = 0;
          this.startCounter()

        }, 1000);
      } else if (this.minutes > 0) {
        setTimeout(() => {
          this.startClick = 0;
          this.contagem   = this.minutes + ":" + this.seconds;
          this.minutes    -= 1;
          // resetando os segundos
          this.seconds = 59;
          this.startCounter();
        }, 1000);
      }
      this.startClick = 1;
    } else {
      this.contagem = "";
      this.seconds = 0;
      this.minutes = 0;
      this.startClick = 1;
    }
  }

}
