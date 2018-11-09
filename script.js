let show_search = document.querySelector("#show-search");
let btnSubmit = document.querySelector("#btnSubmit");
let current_weather = document.querySelector("#current-weather");
let weather_icon = document.querySelector("#weather-icon");
let forcast01 = box.querySelector("#forcast01");
let forcast01_icon = box.querySelector("#forcast01-icon");
let forcast02 = box.querySelector("#forcast02");
let forcast02_icon = box.querySelector("#forcast02-icon");
let forcast03 = box.querySelector("#forcast03");
let forcast03_icon = box.querySelector("#forcast03-icon");
let forcast04 = box.querySelector("#forcast04");
let forcast04_icon = box.querySelector("#forcast04-icon");
let forcast05 = box.querySelector("#forcast05");
let forcast05_icon = box.querySelector("#forcast05-icon");

const getShowCurrent = (data) => {
    let curretWeather = data.weather[0];
    let name = curretWeather.main;
    let image = curretWeather.icon;

    current_weather.innerHTML = name;
    weather_icon.src = `http://openweathermap.org/img/w/${image}.png`;

};

const getShowForcast1 = (data) => {    
    let name1 = data.list[0].weather[0].main;
    forcast01.innerHTML = name1;

    let image1 = data.list[0].weather[0].icon;
    forcast01_icon.src = `http://openweathermap.org/img/w/${image1}.png`;
};

const getShowForcast2 = (data) => {
    let name2 = data.list[8].weather[0].main;
    forcast02.innerHTML = name2;  

    let image2 = data.list[8].weather[0].icon;
    forcast_icon02.src = `http://openweathermap.org/img/w/${image2}.png`;  
};

const getShowForcast3 = (data) => {    
    let name3 = data.list[16].weather[0].main;
    forcast03.innerHTML = name3;  

    let image3 = data.list[16].weather[0].icon;
    forcast_icon03.src = `http://openweathermap.org/img/w/${image3}.png`;  
};

const getShowForcast4 = (data) => {
    let name4 = data.list[24].weather[0].main;
    forcast04.innerHTML = name4;

    let image4 = data.list[24].weather[0].icon;
    forcast04_icon.src = `http://openweathermap.org/img/w/${image4}.png`;  
};

const getShowForcast5 = (data) => {
    let name5 = data.list[32].weather[0].main;
    forcast05.innerHTML = name5;  

    let image5 = data.list[32].weather[0].icon;
    forcast05_icon.src = `http://openweathermap.org/img/w/${image5}.png`;    
};

const clickOnButton = (event) => {
    let value = show_search.value;

    let URL = `http://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=25bc90a1196e6f153eece0bc0b0fc9eb`;

    fetch(URL)
         .then( (response) => { return response.json(); } )
         .then( getShowCurrent )
         .then()

 
    let URL1 = `http://api.openweathermap.org/data/2.5/forecast?q=${value}&APPID=25bc90a1196e6f153eece0bc0b0fc9eb`;

    fetch(URL1)
         .then( (response) => { return response.json(); } )
         .then( getShowForcast1 )
         .then()   

    let URL2 = `http://api.openweathermap.org/data/2.5/forecast?q=${value}&APPID=d3cfde203de9c80b7b1bab1e8e60ab91`;

    fetch(URL2)
         .then( (response) => { return response.json(); } )
         .then( getShowForcast2 )
         .then() 

    let URL3 = `http://api.openweathermap.org/data/2.5/forecast?q=${value}&APPID=fe3aa2c2a09c1550bb84707e6ee2be75`;

    fetch(URL3)
         .then( (response) => { return response.json(); } )
         .then( getShowForcast3 )
         .then()   

    let URL4 = `http://api.openweathermap.org/data/2.5/forecast?q=${value}&APPID=93183b9354abfb215d9c565e9c6fd726`;

    fetch(URL4)
         .then( (response) => { return response.json(); } )
         .then( getShowForcast4 )
         .then()  

    let URL5 = `http://api.openweathermap.org/data/2.5/forecast?q=${value}&APPID=a454a2728155fbb6430895d8d4f88fc7`;

    fetch(URL5)
         .then( (response) => { return response.json(); } )
         .then( getShowForcast5 )
         .then()  
};

btnSubmit.addEventListener("click", clickOnButton);