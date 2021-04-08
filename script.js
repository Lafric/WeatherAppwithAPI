let button = document.querySelector('.button')
let inputValue = document.querySelector('.inputValue')
let name1 = document.querySelector('.name')
let desc = document.querySelector('.desc')
let temp = document.querySelector('.temp')
let tempmin = document.querySelector('.tempmin')
let tempmax = document.querySelector('.tempmax')
let FellsLike = document.querySelector('.FeelsLike')
let humidity = document.querySelector('.humidity')
let currentDate = new Date();
let sun = document.querySelector('#sun1')
let moon = document.querySelector('#moon1')
let cloud = document.querySelector('#cloud1')
let ErrorMsg = document.querySelector('ErrorMsg')
let error = false

     
console.log(cloud);
console.log(moon);
console.log(currentDate);
button.addEventListener('click', fetchData)
button.addEventListener('click',  onsubmit)


function fetchData(){
    fetch ('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=metric&appid=9d19dff47227d8e52205a6596c692ac8')
      .then(response => response.json())
      .then(data =>{


          name1.innerHTML =data.name;
          temp.innerHTML =data.main.temp;
          desc.innerHTML = data.weather[0].description;
          tempmin.innerHTML = data.main.temp_min;
          tempmax.innerHTML = data.main.temp_max;
          humidity.innerHTML = data.main.humidity;
          FellsLike.innerHTML = data.main.feels_like;
          let sunsetTime = new Date(data.sys.sunset * 1000);
          let isDay = (currentDate.getTime() < sunsetTime.getTime());
          if (isDay ){
             sun.style.display= "block"; 
             moon.style.display="none";
             cloud.style.display="none"; 
          }else  {
              sun.style.display= "none";
              moon.style.display="block";
              cloud.style.display="block";
          }
          console.log(isDay & sun.style.display === "none")
          console.log(sunsetTime.getTime())
          console.log(isDay)
          console.log(data)


      })
    .catch(err =>alert('wrong city name') )      
   
}
/*TODO:
=>display the Error msg in the div.ErrorMsg 
=>have a default input value at the bagin 
=>create a forecast weather page and a current weather page*/
