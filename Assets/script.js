var pokemonTypes = [
  {type: 'normal',
  power: 100,
  id: 1,
  pokemonArray: ['0']},

  {type: 'fighting',
  Power: 100,
  id: 2,
  pokemonArray: ['0']},

  {type: 'flying',
  power: 100,
  id: 3,
  pokemonArray: ['0']},

  {type: 'poison',
  power: 100,
  id: 4,
  pokemonArray: ['0']},

  {type: 'ground',
  power: 100,
  id: 5,
  pokemonArray: ['0']},

  {type: 'rock',
  power: 100,
  id: 6,
  pokemonArray: ['0']},

  {type: 'bug',
  power: 100,
  id: 7,
  pokemonArray: ['0']},

  {type: 'ghost',
  power: 100,
  id: 8,
  pokemonArray: ['0']},

  {type: 'steel',
  power: 100,
  id: 9,
  pokemonArray: ['0']},

  {type: 'fire', 
  power: 100,
  id: 10,
  pokemonArray: ['0']},

  {type: 'water', 
  power: 100,
  id: 11,
  pokemonArray: ['0']},

  {type: 'grass', 
  power: 100,
  id: 12,
  pokemonArray: ['0']},

  {type: 'electric',
  power: 100,
  id: 13,
  pokemonArray: ['0']},

  {type: 'psychic',
  power: 100,
  id: 14,
  pokemonArray: ['0']},

  {type: 'ice',
  power: 100,
  id: 15,
  pokemonArray: ['0']},

  {type: 'dragon',
  power: 100,
  id: 16,
  pokemonArray: ['0']}
];

var weatherTypes = [
  {type: 'Clear',//[0] 
  positiveIndex: [2,13,9],
  negativeIndex: [14,7,6,10]
  // flying+[2], dragon+[13] , fire+[9], dark-[14], ghost-[7], bug-[6], water-[10] 
  },
  {type: 'Clouds',//[1]
  positiveIndex: [3,14,1],
  negativeIndex: [0]
  //poison+[3], dark+[14], fighting+[1], normal-[0] 
  },
  {type: 'partlyCloudy', //[2]
  positiveIndex: [3,14,1]
  //poison+[3], dark+[14], fighting+[1], bug+[6]
  },
  {type: 'Rain',//[3]
  positiveIndex: [10,11,4],
  negativeIndex: [5,8,9,3]
  //water+[10], grass+[11], ground+[4], rock-[5], steel-[8], fire-[9], poison-[3]
  },
  {type: 'thunderstorm',//[4]
  positiveIndex: [12,0,1],
  negativeIndex: [13,2,9,5]
  //electric+[12], normal+[0], dragon-[13], flying-[2], fire-[9], rock-[5], 
  },
  {type: 'Snow',//[5]
  positiveIndex: [0,7,5],
  negativeIndex: [4]
  //normal+[0], ghost+[7], rock+[5], steel+[8], ground-[4], 
  },
  {type: 'mist',//[6]
  positiveIndex: [15,7,6],
  negativeIndex: [1,12]
  //fairy+[15], ghost+[7], bug+[6], fighting-[1], electric-[12], 
  },
];

//console.log(pokemonTypes[4].pokemonArray);


var pokeRow = document.getElementById('pokeRow');
var pokeArray;
var typeMasterArray = []; //hold all the pokemon affected by current weather
var userPokeChoice = []; //pick 6 random from typeMasterArray
var currentWeather, currentPlus, currentNegative, currentWeatherIndex;

// ATTEMPT TO LOAD JAVASCRIPT DATA FROM EXTERNAL SOURCE - ASK PROF?!!
// function LoadScript() {
//     $.getScript("assets\scriptFromBen.js", function(script, status, jqxhr) {
//     console.log(status);
//     });
// }
// LoadScript ();
//Input autocomplete for location
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.autocomplete');
//     var instances = M.Autocomplete.init(elems, options);
//   });

//console.log('hello this is the script correctly linked');

apiKey = '79ae4c44176953beec1155138bc60d35'
var cityName = '';
var latitude = '';
var longitude = '';
var recentSearches = [];
var battlePage = 'battleFromBen.html';
//var requestUrl = "api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=79ae4c44176953beec1155138bc60d35";
// redirectUrl =
function getCityWeather() {
  var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial&appid=' + apiKey
  //FETCHING THE WEATHER BASED OFF CITY NAME
  fetch(url)
  .then(function (response) {
      //console.log("hello this is the getCityWeather function");
          //console.log(response);
              return response.json();
          })
          .then(function (data) {
              //console.log("hello this is the data function");
              //console.log("this is current weather", data);
              var iconData = data.weather[0].icon;
              //var iconImg = $('<img>');
              $('#iconImg').addClass("card.small left")
              $('#iconImg').attr('src', 'https://openweathermap.org/img/wn/' + iconData + '@4x.png')
              //$('#icon').append(iconImg)
              var temp = data.main.temp
              $('#temp').text(temp + " degrees")
              var windSpeed = data.wind.speed
              $('#windSpeed').text(windSpeed + " is the Wind Speed")
             // console.log(data.name);
              latitude = data.coord.lat;
              longitude = data.coord.lon;
              //console.log("the latitude is " + latitude, "the longitude is " + longitude);
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
          //console.log("this is the oneCall Api ", data)
          var uvi = data.current.uvi;
          $('#uvi').text(uvi + " UVI index")
          for (i=0; i<5; i++) {
              //console.log("this is the forecast ", data.daily[i])
              var formatDate = moment.unix(data.daily[i].dt).format('dddd, MM/DD/YYYY');
              $('#date' + i).text(formatDate);
              var iconImgForecast = data.daily[i].weather[0].icon;
              $('#iconImg' + i).attr('src', 'https://openweathermap.org/img/wn/' + iconImgForecast + '@2x.png');
              var tempForecast = data.daily[i].temp.day;
              $('#temp' +i).text(tempForecast + ' degrees');
              var humidityForecast = data.daily[i].humidity
              $('#humidity' + i).text(humidityForecast + "% humidity");
              var windSpeedForecast = data.daily[i].wind_speed;
              $('#windSpeed' + i).text(windSpeedForecast + " Wind Speed");
              var uviForecast = data.daily[i].uvi;
              $('#uvi' + i).text(uviForecast + " UVI index");
              
          //var forecast = [];
        
      }
      //this is displaying pokemon cards when a day of the forecast is clicked
      $('#day0Card').click(function() {
        //console.log("hello this is the day0Card")
        //console.log(this + " is the element i just clicked");
        //console.log(data.daily[0].weather[0].main);
        $(".pokeCard").removeClass("hide");
        var day0Weather = data.daily[0].weather[0].main;
        weatherToPokemon(day0Weather);
          console.log("Day 0: " + day0Weather);
      })
      $('#day1Card').click(function() {
        //console.log("hello this is the day1Card")
        //console.log(this + " is the element i just clicked");
        //console.log(data.daily[1].weather[0].main);
        $(".pokeCard").removeClass("hide");
        var day1Weather = data.daily[1].weather[0].main;
        weatherToPokemon(day1Weather);
          console.log("Day 1: " + day1Weather);
      })
      $('#day2Card').click(function() {
        //console.log("hello this is the day2Card")
        //console.log(this + " is the element i just clicked");
        //console.log(data.daily[2].weather[0].main);
        $(".pokeCard").removeClass("hide");
        var day2Weather = data.daily[2].weather[0].main;
        weatherToPokemon(day2Weather);
          console.log("Day 2: " + day2Weather);
      })
      $('#day3Card').click(function() {
        //console.log("hello this is the day3Card")
        //console.log(this + " is the element i just clicked");
        //console.log(data.daily[3].weather[0].main);
        $(".pokeCard").removeClass("hide");
        var day3Weather = data.daily[3].weather[0].main;
        weatherToPokemon(day3Weather);
          console.log("Day 3: " + day3Weather);
      })
      $('#day4Card').click(function() {
        //console.log("hello this is the day4Card")
        //console.log(this + " is the element i just clicked");
        //console.log(data.daily[4].weather[0].main);
        $(".pokeCard").removeClass("hide");
        var day4Weather = data.daily[4].weather[0].main;
        weatherToPokemon(day4Weather);
          console.log("Day 4: " + day4Weather);
      })
      
          return currentWeather;
      })
      .then(function(typeMasterArray) {
         
      })
      
}



// console.log(currentWeather);

function cityListPopulate () {
  cityName = $('#autocomplete-input').val().trim();
  //console.log('hello this is the cityListPopulate function');
  //console.log("the city name is " + cityName);
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
  //console.log('hello this is the submit button function');
  cityListPopulate();
  getCityWeather();
})

$('#pokeRow').click(function(){
$('#battleButton').removeClass('hide');
//console.log(this,'this is clicked');
})


// $('#battleButton').click(function(){
// $(document.location.replace(battlePage))
// })

function battleTab() {
  window.open("battle.html", "_blank");

}

function weatherToPokemon (day0Weather, day1Weather, day2Weather, day3Weather, day4Weather) {
  //this variable needs to change because it's giving two weatherTypes if I Type in a new city
  //THE JS SEEMS TO BE STORING THE DATA FROM THE PREVIOUS CITY SEARCHED
  //MAYBE WE NEED TO REFRESH WHEN NEW CITY IS SEARCHED?
  currentWeather = day0Weather || day1Weather || day2Weather || day3Weather || day4Weather;
  console.log("the current weather is " + currentWeather);
  
  currentWeatherIndex = weatherTypes.findIndex(weather => weather.type === currentWeather);
  // console.log(currentWeatherIndex);
  // populate arrays for each type that is affected by current weather
  for(var i=0; i<weatherTypes[currentWeatherIndex].positiveIndex.length; i++) {
     getTypeAPI(weatherTypes[currentWeatherIndex].positiveIndex[i], currentWeather);
  }

  
  console.log(currentWeather);
}
// weatherToPokemon();



function getTypeAPI(i, currentWeather) {
  fetch('https://pokeapi.co/api/v2/type/' + pokemonTypes[i].id + '/')
  .then(function(response) {
      return response.json();
  })
  .then(data => {
      pokeArray = data.pokemon.slice(0,10);
      // console.log(data.pokemon);
      return pokeArray;
  })
  .then(function(pokeArray) {
      pokemonTypes[i].pokemonArray = pokeArray;
      console.log('Here are ten ' + pokemonTypes[i].type + ' pokemon: ');
      console.log(pokemonTypes[i].pokemonArray);
      return pokemonTypes;
  })
  .then(function(pokemonTypes) {
      currentWeatherIndex = weatherTypes.findIndex(weather => weather.type === currentWeather);
      currentPlus = weatherTypes[currentWeatherIndex].positiveIndex;
      currentNegative = weatherTypes[currentWeatherIndex].negativeIndex;
      console.log('the current weather index is ' + currentWeatherIndex);
      console.log('the positive index is ' + currentPlus)
      console.log('the negative index is ' + currentNegative)
      // for (j=0; j<currentPlus.length; j++) {
      // console.log('this is an example of the pokemon effected positively ' + pokemonTypes[j].id);
      // };
      
      typeMasterArrayPopulate(currentPlus, currentNegative);
      
      console.log(typeMasterArray);

      return typeMasterArray;
      
  })
  .then(function(typeMasterArray) {
      var randomPosition1 = Math.floor(Math.random() * 9);
      var randomPosition2 = Math.floor(Math.random() * 9);
      userPokeChoice.push(typeMasterArray[6][randomPosition1]);
      userPokeChoice.push(typeMasterArray[6][randomPosition2]);
      userPokeChoice.push(typeMasterArray[7][randomPosition1]);
      userPokeChoice.push(typeMasterArray[7][randomPosition2]);
      userPokeChoice.push(typeMasterArray[8][randomPosition1]);
      userPokeChoice.push(typeMasterArray[8][randomPosition2]);

      console.log(userPokeChoice);
      return userPokeChoice;
  })
  .then(function(userPokeChoice) {

    pokeRow.innerHTML='';


      for(var i=0; i<userPokeChoice.length; i++) {
          getOnePokemon(userPokeChoice[i].pokemon.url);
          console.log(userPokeChoice[i].pokemon.url);
      }
  });
}



function typeMasterArrayPopulate(currentPlus, currentNegative) {
  for(var i=0; i<currentPlus.length; i++) {
      typeMasterArray.push(pokemonTypes[currentPlus[i]].pokemonArray);
  }

  return typeMasterArray;
}


// for (i=0; i<pokemonTypes.length; i++) {
// console.log("the pokemon type array is " + pokemonTypes[i].type);
// };
// console.log("the pokemon type array length is " + pokemonTypes.length);
var pokemonDefaultPower = 100;
var pokemonNegativeStatus = pokemonDefaultPower-50;
var pokemonPositiveStatus = pokemonDefaultPower+50;
// console.log("the positive effect is " + pokemonPositiveStatus);
// console.log("the negative effect is " + pokemonNegativeStatus);

//console.log("this is the array of weatherTypes " + weatherTypes)
//console.log("this is the first Index of weatherTypes " + weatherTypes[0])


//create an equation for the types of weather associated with pokemon Type
/*I will need to associate each pokemonType with a starting power of 'pokemonDefaultPower'
then loop through each type of pokemon?
I will need if statements drawn up for each pokemon type and weathertype*/
switch (currentWeather) {
  case weatherTypes[0]:  //clearSky
      pokemonTypes[2].power= pokemonPositiveStatus, 
      pokemonTypes[13].power= pokemonPositiveStatus,
      pokemonTypes[9].power= pokemonPositiveStatus;
      pokemonTypes[14].power= pokemonNegativeStatus,
      pokemonTypes[7].power= pokemonNegativeStatus,
      pokemonTypes[6].power= pokemonNegativeStatus,
      pokemonTypes[10].power= pokemonNegativeStatus;
      
  break;
  case weatherTypes[1]:  //cloudy
      pokemonTypes[3].power= pokemonPositiveStatus, 
      pokemonTypes[14].power= pokemonPositiveStatus,
      pokemonTypes[1].power= pokemonPositiveStatus,
      pokemonTypes[0].power= pokemonNegativeStatus;
  break;
  case weatherTypes[2]: //partlyCloudy
      pokemonTypes[3].power= pokemonPositiveStatus, 
      pokemonTypes[14].power= pokemonPositiveStatus,
      pokemonTypes[1].power= pokemonPositiveStatus,
      pokemonTypes[6].power= pokemonPositiveStatus;
  break;
  case weatherTypes[3]: //rain
      pokemonTypes[10].power= pokemonPositiveStatus, 
      pokemonTypes[11].power= pokemonPositiveStatus,
      pokemonTypes[4].power= pokemonPositiveStatus,
      pokemonTypes[5].power= pokemonNegativeStatus,
      pokemonTypes[8].power= pokemonNegativeStatus,
      pokemonTypes[9].power= pokemonNegativeStatus,
      pokemonTypes[3].power= pokemonNegativeStatus;
  break;
  case weatherTypes[4]: //thunderstorm
      pokemonTypes[12].power= pokemonPositiveStatus,
      pokemonTypes[0].power= pokemonPositiveStatus,
      pokemonTypes[13].power= pokemonNegativeStatus,
      pokemonTypes[2].power= pokemonNegativeStatus,
      pokemonTypes[9].power= pokemonNegativeStatus,
      pokemonTypes[5].power= pokemonNegativeStatus;
  break;
  case weatherTypes[5]: //snow
      pokemonTypes[0].power= pokemonPositiveStatus,
      pokemonTypes[13].power= pokemonPositiveStatus,
      pokemonTypes[2].power= pokemonPositiveStatus,
      pokemonTypes[9].power= pokemonPositiveStatus,
      pokemonTypes[5].power= pokemonNegativeStatus;
  case weatherTypes[6]: //mist
      pokemonTypes[15].power= pokemonPositiveStatus,
      pokemonTypes[7].power= pokemonPositiveStatus,
      pokemonTypes[6].power= pokemonPositiveStatus,
      pokemonTypes[1].power= pokemonNegativeStatus,
      pokemonTypes[12].power= pokemonNegativeStatus;
  break;
}

var endpoint = [
  'pokemon', 
  'type',
  'move-damage-class',
  'move-category',
]

var idOrName = 150//document.getElementById('autocomplete-input').value

//DOM OBJECTS
var pokeCard = document.querySelector('.pokeCard');
var pokeName = document.querySelector('.poke-name',);
var pokeId = document.querySelector('.poke-id');
var pokeFrontImage = document.querySelector('.poke-front-image');
var pokeTypeOne = document.querySelector('.poke-type-one');
var pokeTypeTwo = document.querySelector('.poke-type-two');
var pokeFrontImage = document.querySelector('.poke-front-image');
console.log(pokeName);

//for (i=0; i<idOrName.length; i++) {
// var urlSinglePoke = 'https://pokeapi.co/api/v2/pokemon/' + id + '/' // + "sprites/front_default"
function getOnePokemon(url) {
  fetch (url)
  .then(function (response) {
      return response.json();
  })
  .then( data => {
      console.log('hello this is the data function for urlSinglePoke');
      console.log(data);


      
      var divParentContainer = document.createElement('div');
      divParentContainer.classList.add('pokeCard', 'card')
      var divScreenHeader = document.createElement('div');
      divScreenHeader.classList.add('screen_header')
      var pokeNameSpan = document.createElement('span');
      pokeNameSpan.classList.add('poke-name')
      pokeNameSpan.textContent=data['name']
      divScreenHeader.appendChild(pokeNameSpan)
      divParentContainer.appendChild(divScreenHeader)
      // var pokeIdSpan = document.createElement('span')
      // pokeIdSpan.classList.add('poke-id');
      // pokeIdSpan.textContent=data['name']
      // divScreenHeader.appendChild(pokeIdSpan);
      var divStatsTypes = document.createElement('div')
      divStatsTypes.classList.add('stats__types')
      var pokeTypeOneSpan = document.createElement('span')
      pokeTypeOneSpan.classList.add('poke-type-one');
      var dataTypes = data['types'];
      var dataFirstType = dataTypes[0];
      pokeTypeOneSpan.textContent=dataFirstType['type']['name']
      divStatsTypes.appendChild(pokeTypeOneSpan);
      divParentContainer.appendChild(divStatsTypes);
      var divScreenImage = document.createElement('div')
      divScreenImage.classList.add('screen_image')
      var pokeImage = document.createElement('img')
      pokeImage.classList.add('poke-front-image')
      pokeImage.alt='front image of pokemon'
      pokeImage.src= data['sprites']['front_default']
      divScreenImage.appendChild(pokeImage);
      divParentContainer.appendChild(divScreenImage);
      divParentContainer.classList.add(dataFirstType['type']['name']);
      console.log(divParentContainer);
      pokeRow.appendChild(divParentContainer);
      //shows name of pokemon
      // console.log(data['name']);
      // pokeName.textContent = (data['name']);
      // //shows 1st type of pokemon i.e 'grass/water/poison'
      // console.log(dataFirstType['type']['name']);
      // pokeTypeOne.textContent = (dataFirstType)['type']['name'];
      // //images for pokemon
      // pokeFrontImage.src = data['sprites']['front_default'];
      // //display the color for the type of pokemon!!
      // pokeCard.classList.add((dataFirstType)['type']['name']);

      //shows name of pokemon
      // console.log(data['name']);
      // pokeName.textContent = (data['name']);

      // var dataTypes = data['types'];
      // var dataFirstType = dataTypes[0];
      // //shows 1st type of pokemon i.e 'grass/water/poison'
      // console.log(dataFirstType['type']['name']);
      // pokeTypeOne.textContent = (dataFirstType)['type']['name'];
      
      // //images for pokemon
      // pokeFrontImage.src = data['sprites']['front_default'];

      // //display the color for the type of pokemon!!
      // pokeCard.classList.add((dataFirstType)['type']['name']);
  })
}
//}
// getOnePokemon();



// var urlTypeArray = 'https://pokeapi.co/api/v2/type/1/'
// function getPokeByType() {
//     fetch (urlTypeArray)
//     .then(function (response) {
//         console.log('hello this is the response function for urlTypeArray: ' + response);
//         return response.json();
//     })
//     .then( data => {
//         console.log('hello this is the data function for urlTypeArray');
//         console.log(data);
      
      //shows name of pokemon
      // console.log(data.pokemon_species);

      // console.log(data.pokemon_species)
      // console.log(data.types);

      // var gen1Pokemon = data.types;


      
      // for(var i=0; i<gen1Pokemon.length; i++) {
      //     // console.log(gen1Pokemon[i].url);
      //     fetch(gen1Pokemon[i].url)
      //     .then(function(response) {
      //         return response.json();
      //     })
      //     .then(data => {
      //         console.log(data);
      //     })
      // } 

      //pokemon types variables
      // var dataTypes = data['types'];
      // var dataFirstType = dataTypes[0];
      // var dataSecondType = dataTypes[1];

//     })
// }

// getPokeByType();

      // //shows 1st type of pokemon i.e 'grass/water/poison'
      // console.log(dataFirstType['type']['name']);
      // pokeTypeOne.textContent = (dataFirstType)['type']['name'];
      // //creates variables to check if there are more than one type for each pokemon
      // if (dataSecondType) {
      //     pokeTypeTwo.classList.remove('hide')
      //     pokeTypeTwo.textContent = (dataSecondType)['type']['name'];
      //     console.log = (dataSecondType['type']['name']);

     




























