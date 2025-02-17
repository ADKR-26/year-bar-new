import { initSnowflakes } from "./side-scripts/snowFlake.js";
import { fetchData } from "./side-scripts/visitCount.js";
import { initYearFunctions } from "./side-scripts/yearFunction.js";
import { displayLeaves } from "./side-scripts/leaves.js";
import { displayCamel } from "./side-scripts/camel.js";
import { showRain } from "./side-scripts/rain.js";

console.log("%cHIRE ME", "font-size: 24px; color: #3498db; font-weight: bold;");
console.log(
  "%cCheck out my portfolio: %chttps://adkr-portfolio.vercel.app/",
  "font-size: 16px; color: #2ecc71; font-weight: bold;",
  "font-size: 16px; color: #3498db;"
);

initSnowflakes();
initYearFunctions();
// fetchData();
displayLeaves();
displayCamel();
showRain();



// Spring (Vasanta)
// Months: March, April
// Months in numbers: 3, 4

// Summer (Grishma)
// Months: May, June
// Months in numbers: 5, 6

// Monsoon (Varsha)
// Months: July, August, September
// Months in numbers: 7, 8, 9

// Autumn (Sharad)
// Months: October, November
// Months in numbers: 10, 11

// Winter (Hemanta)
// Months: December, January, February
// Months in numbers: 12, 1, 2