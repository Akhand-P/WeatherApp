const key = "0e52a36c5348449102db9f47cb32b0b5"

const city = document.querySelector("#city");
const button = document.querySelector("#search-btn")

button.addEventListener("click",()=>{
    //If input field is empty
    
    if (city.value == 0) {
        
        result.innerHTML = `<h3 class="msg">Please enter a city name</h3>`;
    }
    else{
        let cityV = city.value;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityV}&appid=${key}&units=metric`;
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            console.log(data.name);
            console.log(data.weather[0].main)
            let icon_= data.weather[0].icon;
            console.log(icon_)
            console.log(data.main.temp)
            console.log(data.main.temp_min)
            console.log(data.main.temp_max)

            result.innerHTML = `
            
                <h2>${data.name}</h2>
                <h4 class="weather">${data.weather[0].main}</h4>
                <h4 class="desc">${data.weather[0].description}</h4>
                <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
                <h1>${data.main.temp} &#176;</h1>
                <div class="temp-container">
                    <div class="min">
                        <h4 class="title">min</h4>
                        <p class="temp">${data.main.temp_min}&#176;</p>
                    </div>
                    <div>
                        <h4 class="title">max</h4>
                        <p class="temp">${data.main.temp_max}&#176;</p>
                    </div>
                </div>
            
            `;
            
        })
        .catch(() => {
            result.innerHTML = `<h3 class="msg">City not found</h3>`;
        });
    }
})