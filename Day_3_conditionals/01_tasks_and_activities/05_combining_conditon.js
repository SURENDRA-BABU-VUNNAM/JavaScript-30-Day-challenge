//Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = 1900

if ((year%4===0 && year%100 !==0) || (year%400===0) ){
    console.log("the year is leap year")
} else {
  console.log("year is not a leap year")
}
