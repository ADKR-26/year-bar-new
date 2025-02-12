
function getYearPercentage() {
    let today = new Date();
    let year = today.getFullYear();
  
    let startDate = new Date(year, 0, 1, 0, 0, 0);
  
    let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    let secondsInAYear = isLeapYear ? 31622400 : 31536000;
  
    let totalSeconds = Math.floor((today - startDate) / 1000);
  
    let yearCompletePercentInSeconds = (
      (totalSeconds * 100) /
      secondsInAYear
    ).toFixed(6);
  
    var progressBar = document.getElementById("myProgress");
    progressBar.value = yearCompletePercentInSeconds;
  
    var progressData = document.getElementById("data");
    progressData.innerHTML = yearCompletePercentInSeconds + " %";
  
    console.log(`Year Percentage Completed: ${yearCompletePercentInSeconds}%`);
  }
  
  function getCurrentTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
  
    var timeString = hours + ":" + minutes + ":" + seconds;
  
    document.getElementById("currentTime").textContent = timeString;
  }
  
  function checkNewYear() {
    const currentYear = new Date().getFullYear();
    const todayDate = new Date();
  
    const newYearDate = new Date(`${currentYear + 1}-01-01T00:00:00`);
    const timeRemaining = newYearDate - todayDate;
  
    if (timeRemaining <= 0) {
      console.log(
        "%c 🎄✨ Happy New Year!! 🎅🌟",
        "color: #e44d26; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px #228b22;"
      );
    } else {
      var newYearElement = document.getElementById("newYear");
      newYearElement.className = "new-year-none";
      var fireElement = document.getElementById("firework");
      fireElement.className = "none";
    }
  
    setTimeout(checkNewYear, 1000);
  }
  
  function initYearFunctions() {
    setInterval(getYearPercentage, 1000);
    setInterval(getCurrentTime, 1000);
    getCurrentTime();
    checkNewYear();
  }
  
  export { initYearFunctions };