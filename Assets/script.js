//Input autocomplete for location
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.autocomplete');
//     var instances = M.Autocomplete.init(elems, options);
//   });

  console.log('hello this is the script correctly linked');

  apiKey = '79ae4c44176953beec1155138bc60d35'
var cityName = '';
var latitude = '';
var longitude = '';
var recentSearches = [];
var battlePage = 'battle.html';
//var requestUrl = "api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=79ae4c44176953beec1155138bc60d35";
// redirectUrl =
function getCityWeather() {
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial&appid=' + apiKey
    //FETCHING THE WEATHER BASED OFF CITY NAME
    fetch(url)
    .then(function (response) {
        console.log("hello this is the getCityWeather function");
            console.log(response);
                return response.json();
            })
            .then(function (data) {
                console.log("hello this is the data function");
                console.log("this is current weather", data);
                var iconData = data.weather[0].icon;
                //var iconImg = $('<img>');
                $('#iconImg').addClass("card.small left")
                $('#iconImg').attr('src', 'https://openweathermap.org/img/wn/' + iconData + '@4x.png')
                //$('#icon').append(iconImg)
                var temp = data.main.temp
                $('#temp').text(temp + " degrees")
                var windSpeed = data.wind.speed
                $('#windSpeed').text(windSpeed + " is the Wind Speed")
                console.log(data.name);
                latitude = data.coord.lat;
                longitude = data.coord.lon;
                console.log("the latitude is " + latitude, "the longitude is " + longitude);
                getForecastUvi(latitude, longitude);
                $('#date').text(moment().format('dddd, MM/DD/YYYY'))
                //add the date for the next five days?  using moment or weather API?
                //save the cityName to local storage
                localStorage.setItem("cityName", data.name)
                //pass the coordinates to other url call for Lat and lon??
            });
        };
function getForecastUvi (lat,lon) {
    var urlOneCall = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=minutely,hourly,alerts&units=imperial&appid=' + apiKey
    fetch(urlOneCall)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log("this is the oneCall Api ", data)
            var uvi = data.current.uvi
            $('#uvi').text(uvi + " UVI index")
            for (i=0; i<5; i++) {
                console.log("this is the forecast ", data.daily[i])
                var formatDate = moment.unix(data.daily[i].dt).format('dddd, MM/DD/YYYY')
                $('#date' + i).text(formatDate);
                var iconImgForecast = data.daily[i].weather[0].icon
                $('#iconImg' + i).attr('src', 'https://openweathermap.org/img/wn/' + iconImgForecast + '@2x.png')
                var tempForecast = data.daily[i].temp.day;
                $('#temp' +i).text(tempForecast + ' degrees');
                var humidityForecast = data.daily[i].humidity
                $('#humidity' + i).text(humidityForecast + "% humidity")
                var windSpeedForecast = data.daily[i].wind_speed;
                $('#windSpeed' + i).text(windSpeedForecast + " Wind Speed")
                var uviForecast = data.daily[i].uvi;
                $('#uvi' + i).text(uviForecast + " UVI index");
            //var forecast = [];
          
        }
        $('#day0Card').click(function() {
          console.log("hello this is the day0Card")
          console.log(this + " is the element i just clicked");
          console.log(data.daily[0].weather[0].main);
          $(".pokeCard").removeClass("hide");
          var day0Weather = data.daily[0].weather[0].main;
        })
        $('#day1Card').click(function() {
          console.log("hello this is the day1Card")
          console.log(this + " is the element i just clicked");
          console.log(data.daily[1].weather[0].main);
          $(".pokeCard").removeClass("hide");
          var day1Weather = data.daily[1].weather[0].main;
        })
        $('#day2Card').click(function() {
          console.log("hello this is the day2Card")
          console.log(this + " is the element i just clicked");
          console.log(data.daily[2].weather[0].main);
          $(".pokeCard").removeClass("hide");
          var day2Weather = data.daily[2].weather[0].main;
        })
        $('#day3Card').click(function() {
          console.log("hello this is the day3Card")
          console.log(this + " is the element i just clicked");
          console.log(data.daily[3].weather[0].main);
          $(".pokeCard").removeClass("hide");
          var day3Weather = data.daily[3].weather[0].main;
        })
        $('#day4Card').click(function() {
          console.log("hello this is the day4Card")
          console.log(this + " is the element i just clicked");
          console.log(data.daily[4].weather[0].main);
          $(".pokeCard").removeClass("hide");
          var day4Weather = data.daily[4].weather[0].main;
        })
        })
}
function cityListPopulate () {
    cityName = $('#autocomplete-input').val().trim();
    console.log('hello this is the cityListPopulate function');
    console.log("the city name is " + cityName);
    var listItem = $('<li>')
    var cityListButtons = $('<button>');
    $('#cityTitleCard').text(cityName);
    if (recentSearches.indexOf(cityName) === -1) {
    cityListButtons.addClass('title btn-large')
    cityListButtons.text(cityName);
    listItem.append(cityListButtons);
    $("#buttonList").append(listItem);
    recentSearches.push(cityName);
    }
   // $("#autocomplete-input").val("");
}
//loads the whole page
$('#city-form').submit(function (event) {
    $('#currentWeatherCard').removeClass('hide');
    $('.forecastCard').removeClass('hide');
    event.preventDefault();
    console.log('hello this is the submit button function');
    cityListPopulate();
    getCityWeather();
})

$('#pokeRow').click(function(){
  $('#battleButton').removeClass('hide');
  console.log(this,'this is clicked');
})

$('#battleButton').click(function(){
  $(document.location.replace(battlePage))
})

























