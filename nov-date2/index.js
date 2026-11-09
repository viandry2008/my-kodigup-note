"use strict";

const readline = require("readline-sync");

//Enter date: 8/10/1920
//The day for 8/10/1920 in tuesday

/**
 * The year for the reference point.
 * @type {number}
 */
const EPOCH_YEAR = 1800;

/**
 * The month for the reference point.
 * @type {number}
 */
const EPOCH_MONTH = 1;

/**
 * The first day index for the reference point.
 * @type {number}
 */
const EPOCH_FIRST_DAY = 3;

/**
 * @typedef {0|1|2|3|4|5|6} DayIndex
 */

/**
 * @typedef {object} DatePoint
 * @property {number} day;
 * @property {number} month;
 * @property {number} year;
 */

/**
 * Pase the given str into DatePoint
 * @param {string} str
 * @returns {DatePoint}
 */
function parseDate(str) {
  const [day, month, year] = str.split("/").map(Number);
  return { day, month, year };
}

// const point = parseDate("");

/**
 * Get the number of days in the given year and month.
 * @param {number} year
 * @param {number} month
 * @returns {number}
 */
function getDaysInMonth(year, month) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 2:
      return isLeepYear(year) ? 29 : 28;
  }
}

/**
 * Get the number of days in a given year.
 * @param {number} year
 * @returns {number}
 */
function getDaysInYear(year) {
  return isLeepYear(year) ? 366 : 365;
}

/**
 * Determine wheter a given year is a leap year.
 * @param {number} year
 * @returns {boolean}
 */
function isLeepYear(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

/**
 * Calculate the number of days between the given date and epoch.
 * @param {DatePoint} date
 */
function getDaysSinceEpoch(date) {
  let days = 0;

  for (let year = EPOCH_YEAR; year < date.year; year++) {
    days += getDaysInYear(year);
  }

  for (let month = EPOCH_MONTH; month < date.month; month++) {
    days += getDaysInMonth(date.year, month);
  }

  days += date.day;

  return days;
}

/**
 * Get the day index for the given date.
 * @param {DatePoint} date
 * @returns {DayIndex} - day index
 */
function getDayForDate(date) {
  return (EPOCH_FIRST_DAY + getDaysSinceEpoch(date)) % 7;
}

/**
 * Get day name in English for the given day index
 * @param {DayIndex} day - day index
 * @returns {string}
 */
function getDayName(day) {
  switch (day) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 0:
      return "Sunday";
  }
}

// /**
//  * @type {DatePoint}
//  */
// const date = { day: 8, month: 10, year: 1920 };

const input = readline.question("Input date (d/m/y): ");
const date = parseDate(input);
const dayName = getDayName(getDayForDate(date));

console.log(`The day for ${input} is: ${dayName}`);
