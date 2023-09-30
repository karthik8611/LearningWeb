
const apiKey="a33d25398f53ff29c73a2f2ddbdf78a3";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox= document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherICon=document.querySelector(".weather-icon")

async function checkWeather(city){

   const response= await fetch(apiUrl + city + `&appid=${apiKey}`);
   var data =await response.json();
   if(response.status==404){
       document.querySelector(".error").style.display="block";
       document.querySelector(".weather").style.display="none";
   }else{
       document.querySelector(".city").innerHTML=data.name;
   document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"°C";
   document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
   document.querySelector(".wind").innerHTML=data.wind.speed +" km/h";

   if(data.weather[0].main=="Clouds"){
       weatherICon.src="images/clouds.png"

   }else if(data.weather[0].main=="Clear"){
       weatherICon.src="images/clear.png"
   }

   else if(data.weather[0].main=="Rain"){
       weatherICon.src="images/rain.png"
   }
   
   else if(data.weather[0].main=="Drizzle"){
       weatherICon.src="images/drizzle.png"
   }
   else if(data.weather[0].main=="Mist"){
       weatherICon.src="images/mist.png"
   }

   document.querySelector(".weather").style.display="block";
   document.querySelector(".error").style.display="none";


   }
}


searchBtn.addEventListener("click", ()=>{
   checkWeather(searchBox.value);
})



