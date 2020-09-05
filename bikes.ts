class Bike {
  Price: number;
  Max_speed: number;
  Miles: number;

  constructor(price: number, max_speed: number, miles: number) {
    this.Price = price;
    this.Max_speed = max_speed;
    this.Miles = miles;
  }

  displayInfo() {
    console.log(
      `Price: ${this.Price}, Max Speed: ${this.Max_speed}, Miles: ${this.Miles}`
    );
  }
  ride() {
    this.Miles += 10;
    return this;
  }
  reverse() {
    if (this.Miles > 0) {
      this.Miles -= 5;
    }
    return this;
  }
}

let firstInstance = new Bike(50, 24, 10);
let secondInstance = new Bike(110, 14, 15);
let thirdInstance = new Bike(5, 23, 545);
