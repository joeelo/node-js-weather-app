document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.querySelector(".search-form")
  
  const fetchData = (location) => {
    fetch(`/weather?address=${location}`)
    .then(res => res.json())
    .then(data => { 
      if (data.error) {
        return alert("You Must Enter Valid City or Zip")
      }
      renderData(data);
      console.log(data);
    })
  }
  
  const renderData = (data) => {
    const mainDiv = document.querySelector(".fetch-div");
    mainDiv.innerHTML = `
      <h1> ${data.location} </h1>
      <h2> ${data.forecast} </h2>
      <h2> The high of today will be ${data.tempHigh} with a low of ${data.tempLow}
      <p> It is currently ${data.temp} degrees</p>
      <p> There is a ${data.precip}% chance of rain</p>
    `
  }

  
  const searchHandler = () => {
    event.preventDefault();
    const location = document.querySelector(".city-field");
    fetchData(location.value);
  }
  
  searchForm.addEventListener("submit", searchHandler)
  
})

// const weatherUtilities = (dataObj = {}) => {
//   const { temp, precip } = dataObj
//   if (temp > 45 && precip < 20) {
//     return "Seems like A light jacket Kinda day"
//   } else if (temp < 40 && precip > 40 ) {
//     return "It's gonna be pretty brisk with a chance of snow make sure to bring an umbrella"
//   }
// };