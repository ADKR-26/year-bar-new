import { initSnowflakes } from "./side-scripts/snowFlake.js";
import { fetchData } from "./side-scripts/visitCount.js";
import { initYearFunctions } from "./side-scripts/yearFunction.js";

console.log("%cHIRE ME", "font-size: 24px; color: #3498db; font-weight: bold;");
console.log(
  "%cCheck out my portfolio: %chttps://adkr-portfolio.vercel.app/",
  "font-size: 16px; color: #2ecc71; font-weight: bold;",
  "font-size: 16px; color: #3498db;"
);

initSnowflakes();
initYearFunctions();
// fetchData();