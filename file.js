
const apiKey = 'ceec195a8f99fff11f5b6a33a6889490';
 const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


 const searchbox = document.querySelector(".srch input");
 const searchbutton = document.querySelector(".srch button");
 const vdo = document.querySelector(".vdo");
 const tempr = document.querySelector(".temptext");
 const citytxt = document.querySelector(".text");
        // Replace 'CITY_NAME' with the desired city
        async function checkweather(city){
            console.log("hello");
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            var data = await response.json();
                 
            console.log(data);

            document.querySelector(".temptext").innerHTML = data.main.temp + " &degC";
           document.querySelector(".text").innerHTML = city;
           document.querySelector(".text3").innerHTML = data.wind.speed +("m/s");
           document.querySelector(".text2").innerHTML = data.main.humidity +"%";

           const typeweather = data.weather[0].main;
            if(typeweather == "Clouds"){
              vdo.src = "images/cloud2v.mp4";
      

            }
            else if(typeweather == "Clear"){
              vdo.src = "images/clear sky.mp4";
            }
            else if(typeweather == "Rain"){
              vdo.src = "images/rainv.mp4";
            }
            else if(typeweather == "Drizzle"){
              vdo.src = "images/drizzlev.mp4";
            }
            else if(typeweather == "Haze"){
              vdo.src = "images/hazev.mp4";
            }
            else if(typeweather == "Snow"){
              vdo.src = "images/snowv.mp4";
            }
            else if(typeweather == "Mist"){
              vdo.src = "images/mistv.mp4";
            }
            
          }

        

       
     
          searchbutton.addEventListener("click",()=>{
             checkweather(searchbox.value);
          })
        

          
     //change the video based on condition




    //hidden box

    // Show the box when the page is loaded
window.onload = function() {
  var box = document.getElementById("box");
  setTimeout(function() {
      box.classList.remove("hidden");
      box.style.transform = "scale(1)";
  }, ); // Adjust the delay for appearing as needed
  // Hide the box after a delay (e.g., 5 seconds)
  setTimeout(function() {
      box.classList.add("hidden");
      box.style.transform = "scale(0.5)";
  }, 3500); // Adjust the delay for disappearing as needed
};


//trying
// const newss = document.querySelector(".cityname");
// newss.innerHTML = "hiii";

