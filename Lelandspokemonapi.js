//var url = 'https://pokeapi.co/api/v2/' + endpoint +'/' + idOrName
var pokemonTypes = [
    {type: 'normal', //0
    power: 100},
    {type: 'fighting', //1
    Power: 100},
    {type: 'flying', //2
    power: 100}, 
    {type: 'poison', //3
    power: 100},
    {type: 'ground', //4
    power: 100},
    {type: 'rock', //5
    power: 100},
    {type: 'bug', //6
    power: 100},
    {type: 'ghost', //7
    power: 100},
    {type: 'steel', //8
    power: 100},
    {type: 'fire', //9
    Power: 100},
    {type: 'water', //10
    Power: 100},
    {type: 'grass', //11
    Power: 100},
    {type: 'electric', //12
    power: 100},
    {type: 'dragon', //13
    Power: 100},
    {type: 'dark', //14
    Power: 100},
    {type: 'fairy', //15
    Power: 100},
];
// for (i=0; i<pokemonTypes.length; i++) {
// console.log("the pokemon type array is " + pokemonTypes[i].type);
// };
// console.log("the pokemon type array length is " + pokemonTypes.length);
var pokemonDefaultPower = 100;
var pokemonNegativeStatus = pokemonDefaultPower-50;
var pokemonPositiveStatus = pokemonDefaultPower+50;
// console.log("the positive effect is " + pokemonPositiveStatus);
// console.log("the negative effect is " + pokemonNegativeStatus);
var weatherTypes = [
    'clearSky', 
    // flying+[2], dragon+[13] , fire+[9], dark-[14], ghost-[7], bug-[6], water-[10]
    'cloudy',
    //poison+, dark+, fighting+, normal-
    'partlyCloudy',
    //poison+, dark+, fighting+, bug+
    'rain',
    //water+, grass+, ground+, rock-, steel-, fire-, poison-
    'thunderstorm',
    //electric+, dragon-, flying-, fire-, rock-, normal+
    'snow',
    //ground-, normal+, ghost+, rock+, steel+
    'mist'
    //fairy+, fighting-, ghost+, bug+, electric-
];
//console.log("this is the array of weatherTypes " + weatherTypes)
//console.log("this is the first Index of weatherTypes " + weatherTypes[0])

var currentWeather = weatherTypes[0];
console.log("the current weather is " + currentWeather)
/*I will need to associate each pokemonType with a starting power of 'pokemonDefaultPower'
then loop through each type of pokemon?
I will need if statements drawn up for each pokemon type and weathertype*/
switch (currentWeather) {
    case weatherTypes[0]: 
        pokemonTypes[2].power= pokemonPositiveStatus, 
        pokemonTypes[13].power= pokemonPositiveStatus,
        pokemonTypes[9].power= pokemonPositiveStatus;
        console.log(pokemonTypes[2].power)
        
    break;
    case weatherTypes[1]: pokemonTypes[2].power - pokemonNegativeStatus;
    break;
    case weatherTypes[2]: pokemonTypes[2].power - pokemonNegativeStatus;
    break;
    case weatherTypes[3]: pokemonTypes[2].power - pokemonNegativeStatus;
    break;
    case weatherTypes[4]: pokemonTypes[2].power - pokemonNegativeStatus;
    break;
    case weatherTypes[5]: pokemonTypes[2].power - pokemonNegativeStatus;
    break;
}

console.log("the pokemon type " + pokemonTypes[0].type + " will have a negative status with " + weatherTypes[1])


// var pokemonStatusEffects [

// ]

//create an equation for the types of weather associated with pokemon Type

var endpoint = [
    'pokemon', 
    'type',
    'move-damage-class',
    'move-category',
]




/*//types of weather
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

var idOrName = 150//document.getElementById('autocomplete-input').value

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
        console.log('hello this is the response function')
        console.log(response)
        return response.json();
    })
    .then( data => {
        console.log('hello this is the data function')
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