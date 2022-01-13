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
    'clearSky',//[0] 
    // flying+[2], dragon+[13] , fire+[9], dark-[14], ghost-[7], bug-[6], water-[10]
    'cloudy',//[1]
    //poison+[3], dark+[14], fighting+[1], normal-[0]
    'partlyCloudy', //[2]
    //poison+[3], dark+[14], fighting+[1], bug+[6]
    'rain',//[3]
    //water+[10], grass+[11], ground+[4], rock-[5], steel-[8], fire-[9], poison-[3]
    'thunderstorm',//[4]
    //electric+[12], normal+[0], dragon-[13], flying-[2], fire-[9], rock-[5], 
    'snow',//[5]
    //normal+[0], ghost+[7], rock+[5], steel+[8], ground-[4], 
    'mist'//[6]
    //fairy+[15], ghost+[7], bug+[6], fighting-[1], electric-[12], 
];
//console.log("this is the array of weatherTypes " + weatherTypes)
//console.log("this is the first Index of weatherTypes " + weatherTypes[0])

var currentWeather = '';
console.log("the current weather is " + currentWeather)
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

// var pokemonStatusEffects [

// ]



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
// var urlSinglePoke = 'https://pokeapi.co/api/v2/' + endpoint[0] + '/' + idOrName + '/' // + "sprites/front_default"
// function getOnePokemon() {
//     fetch (urlSinglePoke)
//     .then(function (response) {
//         console.log('hello this is the response function for urlSinglePoke')
//         console.log(response)
//         return response.json();
//     })
//     .then( data => {
//         console.log('hello this is the data function for urlSinglePoke')
//         console.log(data);
        
//         //shows name of pokemon
//         console.log(data['name']);
//         pokeName.textContent = (data['name'])

//         //pokemon types variables
//         var dataTypes = data['types'];
//         var dataFirstType = dataTypes[0];
//         var dataSecondType = dataTypes[1];

//         //shows 1st type of pokemon i.e 'grass/water/poison'
//         console.log(dataFirstType['type']['name']);
//         pokeTypeOne.textContent = (dataFirstType)['type']['name'];
//         //creates variables to check if there are more than one type for each pokemon
//         if (dataSecondType) {
//             pokeTypeTwo.classList.remove('hide')
//             pokeTypeTwo.textContent = (dataSecondType)['type']['name'];
//             console.log = (dataSecondType['type']['name']);

//         } else {
//             pokeTypeTwo.classList.add('hide');
//             pokeTypeTwo.textContent = '';
//             //empty string to display nothing
//             console.log = ("this pokemon has no second type");
//         }

//         //images for pokemon
//         pokeFrontImage.src = data['sprites']['front_default'];
//         //display the color for the type of pokemon!!
//         pokeCard.classList.add((dataFirstType)['type']['name']);
//     })
// }
//}

var urlTypeArray = 'https://pokeapi.co/api/v2/' + endpoint[1] + '/' + pokemonTypes[1].type + '/' // + "sprites/front_default"
function getTypePokemon() {
    fetch (urlTypeArray)
    .then(function (response) {
        console.log('hello this is the response function for urlTypeArray')
        console.log(response)
        return response.json();
    })
    .then( data => {
        console.log('hello this is the data function for urlTypeArray')
        console.log(data);
        
        //shows name of pokemon
        console.log(data['name']);  //name of type
        //pokeName.textContent = (data['name']) -change to different variable

        //pokemon types variables
        // var dataTypes = data['types'];
        // var dataFirstType = dataTypes[0];
        // var dataSecondType = dataTypes[1];

        //shows 1st type of pokemon i.e 'grass/water/poison'
        console.log(dataFirstType['type']['name']);
        pokeTypeOne.textContent = (dataFirstType)['type']['name'];
        //creates variables to check if there are more than one type for each pokemon

        //images for pokemon
        pokeFrontImage.src = data['sprites']['front_default'];
        //display the color for the type of pokemon!!
        pokeCard.classList.add((dataFirstType)['type']['name']);
    })
}
//getOnePokemon();
getTypePokemon();