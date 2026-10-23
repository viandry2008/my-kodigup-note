// const person = {
//   name: "Vian",
// };

// console.log(person.toString());

// ================================

// function Circle(radius) {
//   this.radius = radius;
// }

// Circle.prototype.getArea = function () {
//   return 3.14 * this.radius * this.radius;
// };

// const circle = new Circle(3);

// console.log(circle.getArea());

// ================================

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
// }

// Rectangle.prototype.getArea = function () {
//   return this.width * this.height;
// };

// Rectangle.prototype.getPerimeter = function () {
//   return 2 * (this.width + this.height);
// };

// const rectangle1 = new Rectangle(3, 5);
// const rectangle2 = new Rectangle(2, 4);

// console.log(rectangle1.getArea === rectangle2.getArea); // true

// without prototype ===================

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.getArea = function () {
//     return this.width * this.height;
//   };
//   getPerimeter = function () {
//     return 2 * (this.width + this.height);
//   };
// }

// const rectangle1 = new Rectangle(3, 5);
// const rectangle2 = new Rectangle(2, 4);

// console.log(rectangle1.getArea === rectangle2.getArea); // false

// ================================

// contoh buruk =====

// const shape = {
//   move: function () {
//     console.log("I am moving");
//   },
// };

// const rectangle = {
//   width: 5,
//   height: 3,
// };

// rectangle.__proto__ = shape;

// rectangle.move();

// and contoh lain ======

// const animal = {
//   jump: function () {
//     console.log("I am jumping");
//   },
// };

// const tiger = {
//   __proto__: animal,
// };

// const cat = {
//   __proto__: animal,
// };

// cat.jump();

// === note ================================
// gentleman agreements
// _name -> lvl 1 private property
// __name -> lvl 2 library private  / dunder (double underscore)
// __name__ -> lvl 3 system private / double ended dunder

// ================================
// birth cerificate
// jangan hapus birth certificate

// function Circle(radius) {
//   this.radius = radius;
// }

// nampilin saja
// const circle = new Circle.prototype.constructor(3);
// console.log(circle);

// bisa juga gini
// const circle = new Circle(3);
// const anotherCircle = new circle.constructor(5);
// console.log(anotherCircle);

// contoh dia punya birth sertificate
// Circle.prototype.getArea = function () {
//   return Math.PI * this.radius ** 2;
// };

// contoh dia tidak punya birth sertificate
// Circle.prototype = {
//   getArea: function () {
//     return Math.PI * this.radius ** 2;
//   },
// };

// mengecek dia punya birth certificate
// console.log(Circle.prototype.constructor === Circle);

// deteksi dengan property descriptor
//  enumerable: false,
// console.log(Object.getOwnPropertyDescriptors(Circle.prototype));

// behind the scenenya instanceof
// oprator yang sangat penting
// if (circle instanceof Circle) {
//   console.log("lahir dari constructor function Circle");
// }

// chaining cari objek terdekat

// ======================================
// semua fungsi yang kita pakai menggunakan prototype
// contoh:
const strings = ["h", "e", "l", "l", "o"];
console.log("abc".toUpperCase === String.prototype.toUpperCase);

const result = strings.map((s) => s.toUpperCase());
console.log(result);

// semua seperti ini
Array.prototype.map;
Array.prototype.forEach;
Array.prototype.filter;
Array.prototype.includes;
Array.prototype.some;
Array.prototype.every;
Array.prototype.for;
