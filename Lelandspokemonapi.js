//var url = 'https://pokeapi.co/api/v2/' + endpoint +'/' + idOrName
var endpoint = [
    'pokemon', 
    'type',
    'move-damage-class',
    'move-category',
]/*//types of weather
var clearSky
//cloudy will include scattered clouds and broken clouds
var cloudy
//partly Cloudy will include few clouds
var partlyCloudy
//rain will include shower rain
var rain
var thunderstorm
var snow
//this means foggy to me?
var mist*/

var idOrName = 1//document.getElementById('autocomplete-input').value
//DOM OBJECTS
var pokeCard = document.querySelector('.pokeCard');
var pokeName = document.querySelector('.poke-name');
var pokeId = document.querySelector('.poke-id');
var pokeFrontImage = document.querySelector('.poke-front-image');
var pokeTypeOne = document.querySelector('.poke-type-one');
var pokeTypeTwo = document.querySelector('.poke-type-two');
var pokeFrontImage = document.querySelector('.poke-front-image');
console.log(pokeName);

//for (i=0; i<idOrName.length; i++) {
var url = 'https://pokeapi.co/api/v2/' + endpoint[0] + '/' + idOrName + '/' // + "sprites/front_default"
function getApi() {
    fetch (url)
    .then(function (response) {
        console.log('hello')
        console.log(response)
        return response.json();
    })
    .then( data => {
        console.log('hello')
        console.log(data);
        
        //shows name of pokemon
        console.log(data['name']);
        pokeName.textContent = (data['name'])

        //pokemon types variables
        var dataTypes = data['types'];
        var dataFirstType = dataTypes[0];
        var dataSecondType = dataTypes[1];

        //shows 1st type of pokemon i.e 'grass/water/poison'
        console.log(dataFirstType['type']['name']);
        pokeTypeOne.textContent = (dataFirstType)['type']['name'];
        //creates variables to check if there are more than one type for each pokemon
        if (dataSecondType) {
            pokeTypeTwo.classList.remove('hide')
            pokeTypeTwo.textContent = (dataSecondType)['type']['name'];
            console.log = (dataSecondType['type']['name']);

        } else {
            pokeTypeTwo.classList.add('hide');
            pokeTypeTwo.textContent = '';
            //empty string to display nothing
            console.log = ("this pokemon has no second type");
        }

        //images for pokemon
        pokeFrontImage.src = data['sprites']['front_default'];
        //display the color for the type of pokemon!!
        pokeCard.classList.add((dataFirstType)['type']['name']);
    })
}
//}
getApi();