async function fetchData() {
    try {
      let visitCounter = document.getElementById("visitCount");
      visitCounter.innerHTML = "Loading...";
  
      const response = await fetch("https://counter-api.onrender.com/counter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "year-bar",
        }),
      });
  
      const data = await response.json();
      const visitCount = data?.newData?.visits;
  
      visitCounter.innerHTML = visitCount;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  export { fetchData };