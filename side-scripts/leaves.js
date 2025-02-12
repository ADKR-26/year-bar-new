function isAutumn() {
  const month = new Date().getMonth() + 1; // getMonth() returns 0-11
  return month >= 6 && month <= 8; // September, October, November
}

export function displayLeaves() {
  if (!isAutumn()) {
    document.querySelector(".leaf").style.display = "none";
  }
}
