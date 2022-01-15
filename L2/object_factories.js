function makeCar(speedUpRate, brakeRate) {
  return {
    speed: 0,
    speedUpRate,
    brakeRate,
    
    accelerate() {
      this.speed += this.speedUpRate;
    },
    
    brake() {
      if (this.speed === 0) return;
      this.speed -= this.brakeRate;
      if (this.speed < 0) this.speed = 0;
    },
  };
}

let hatchback = makeCar(9);

let sedan = makeCar(8, 6);
sedan.accelerate();