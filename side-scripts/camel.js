function isSummer() {
  const month = new Date().getMonth() + 1; // getMonth() returns 0-11
  return month >= 2 && month <= 6; // September, October, November
}

export function displayCamel() {
  if (!isSummer()) {
    document.querySelector("body").style.marginTop = "12%";
    document.querySelector(".container").style.display = "none";
  } else {
    document.querySelector("body").style.marginTop = "100px";
  }
}
