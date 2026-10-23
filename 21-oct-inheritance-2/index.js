// method definition
// const rectangle = {
//   width: 3,
//   height: 5,
//   getArea() {
//     return this.width * this.height;
//   },
//   getPerimeter() {
//     return 2 * (this.width + this.height);
//   },
// };

// rectangle.getArea();
// rectangle.getArea; // function
// rectangle.getArea.call(); // salah satu properti function, method call -> untuk memanggil method isi parameternya value of this
// rectangle.getArea.call(rectangle);
// rectangle.getPerimeter.call(rectangle);

// binding a method
// bind = ikat
// mengikat method
// lebih elegan
// const calculateArea = rectangle.getArea.bind(rectangle);
// console.log(calculateArea);

// atau tidak elegan

// const calculateArea2 = rectangle.getArea;
// console.log(calculateArea.bind(rectangle)());

// .call with arguments
// contoh 1
// const land = {
//   width: 20,
//   height: 50,
//   calculatePrice(pricePerSqm) {
//     return this.width * this.height * pricePerSqm;
//   },
// };

// const calculateLandPrice = land.calculatePrice;
// calculateLandPrice.call(land, 100);

// contoh 2
// const land = {
//   width: 20,
//   height: 50,
//   calculatePrice(pricePerSqm cureency) {
//     return this.width * this.height * pricePerSqm;
//   },
// };

// const calculateLandPrice = land.calculatePrice;
// calculateLandPrice.call(land, 100, 10);

// atau pake bind -> non mutating
// contoh 1
// const land = {
//   width: 20,
//   height: 50,
//   calculatePrice(pricePerSqm cureency) {
//     return this.width * this.height * pricePerSqm;
//   },
// };

// const calculateLandPrice = land.calculatePrice.bind(land);
// console.log(calculateLandPrice('$',10));

// =============================== inheritance 2
