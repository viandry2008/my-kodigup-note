// const MILLIS_PER_SECOND = 1000;
// const MILLIS_PER_MINUTE = 60 * MILLIS_PER_SECOND;
// const MILLIS_PER_HOUR = 60 * MILLIS_PER_MINUTE;
// const MILLIS_PER_DAY = 24 * MILLIS_PER_HOUR;

// class Tanggal {
//   _millis;
//   _year;
//   _month;
//   _date;
//   _hours;
//   _minutes;
//   _seconds;
//   _miliseconds;

//   constructor(millis) {
//     this._millis = millis;

//     this._decompose();
//   }

//   _decompose() {
//     let remainingDays = Math.floor(this._millis / MILLIS_PER_DAY);

//     this._year = 1970;
//     while (true) {
//       const daysInYear = this._getDaysInYear(this._year);
//       if (remainingDays < daysInYear) break;
//       remainingDays -= daysInYear;
//       this._year++;
//     }

//     this._month = 0;
//     while (true) {
//       const daysInMonth = this._getDaysInMonth(this._year, this._month);
//       if (remainingDays < daysInMonth) break;
//       remainingDays -= daysInMonth;
//       this._month++;
//     }

//     this._date = remainingDays + 1;

//     this._hours = Math.floor(this._millis / MILLIS_PER_HOUR) % 24;
//     this._minutes = Math.floor(this._millis / MILLIS_PER_MINUTE) % 60;
//     this._seconds = Math.floor(this._millis / MILLIS_PER_SECOND) % 60;
//     this._miliseconds = this._millis % MILLIS_PER_SECOND;
//   }

//   getFullYear() {
//     return this._year;
//   }

//   getMonth() {
//     return this._month;
//   }

//   getDate() {
//     return this._date;
//   }

//   getHours() {
//     return this._hours;
//   }

//   getMinutes() {
//     return this._minutes;
//   }

//   getSeconds() {
//     return this._seconds;
//   }

//   getMilliseconds() {
//     return this._miliseconds;
//   }

//   _getDaysInYear(year) {
//     return this._isLeapYear(year) ? 366 : 365;
//   }

//   _getDaysInMonth(year, month) {
//     return [
//       31,
//       this._isLeapYear(year) ? 29 : 28,
//       31,
//       30,
//       31,
//       30,
//       31,
//       31,
//       30,
//       31,
//       30,
//       31,
//     ][month];
//   }

//   _isLeapYear(year) {
//     return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
//   }

//   [Symbol.toPrimitive](hint) {
//     if (hint === "string") {
//       let str = this.getFullYear();
//       str += "-";
//       str += String(this.getMonth()).padStart(2, "0");
//       str += "-";
//       str += String(this.getDate()).padStart(2, "0");
//       str += "T";
//       str += String(this.getHours()).padStart(2, "0");
//       str += ":";
//       str += String(this.getMinutes()).padStart(2, "0");
//       str += ":";
//       str += String(this.getSeconds()).padStart(2, "0");
//       str += ".";
//       str += String(this.getMilliseconds()).padStart(3, "0");
//       return str;
//     }

//     return this._millis;
//   }
// }

// const tanggal = new Tanggal(1119661805725);

// ====================== cara sakti
// const tanggal = new Date(1119661805725);

// console.log("year: " + tanggal.getFullYear());
// console.log("month: " + tanggal.getMonth());
// console.log("date: " + tanggal.getDate());
// console.log("hours: " + tanggal.getHours());
// console.log("minutes: " + tanggal.getMinutes());
// console.log("seconds: " + tanggal.getSeconds());
// console.log("milliseconds: " + tanggal.getMilliseconds());

// 1119661805725
// 25 Jun 2005 01:10:05.725

// ====================== klo pakai symbol to primitive

// const tanggal1 = new Tanggal(1119661805725);
// const tanggal2 = new Tanggal(1793624824132);

// console.log(Number(tanggal2));

// console.log(tanggal1 < tanggal2);

// ====================== ingin mempunyai format

// const tanggal = new Tanggal(1119661805725);
// console.log(String(tanggal));

// "2005-05-25T01:10:05.725"
// "yyyy-mm-ddThh:mm:ss.MMM"

// ====================== cara sakti 2
// const tanggal = new Date(1119661805725);
// console.log(String(tanggal));

const tanggal = new Date(1119661805725);
console.log(tanggal.toISOString());
