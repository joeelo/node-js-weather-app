document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.querySelector(".search-form")
  
  const fetchData = (location) => {
    fetch(`http://localhost:3000/weather?address=${location}`)
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
