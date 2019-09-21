class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = "";
  }
  
  addSecond = () => this.currentTime += 1

  startClick() {
    this.intervalId = setInterval(this.addSecond, 1000);
  }
  
  getMinutes() {
    return Math.floor(this.currentTime/60);
  }
  
  getSeconds() {
    return this.currentTime%60;
  }

  twoDigitsNumber(num) {
    return (num<10) ? "0" + num : num.toFixed(0);
  }

  stopClick() {
    clearInterval(this.intervalId)
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {}
}














