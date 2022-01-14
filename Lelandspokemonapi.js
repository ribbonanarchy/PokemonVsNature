//var url = 'https://pokeapi.co/api/v2/' + endpoint +'/' + idOrName
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

console.log(pokemonTypes[4].pokemonArray);
var pokeArray;
var typeMasterArray; //hold all the pokemon affected by current weather
var userPokeChoice; //pick 6 random from typeMasterArray

// populate arrays for each type
for(var i=0; i<pokemonTypes.length; i++) {
   pokemonTypes[i].pokemonArray = getTypeAPI(i);
}

function getTypeAPI(i) {
    fetch('https://pokeapi.co/api/v2/type/' + pokemonTypes[i].id + '/')
    .then(function(response) {
        return response.json();
    })
    .then(data => {
        pokeArray = data.pokemon.slice(0,10);
        return pokeArray;
    })
    .then(function(pokeArray) {
        pokemonTypes[i].pokemonArray = pokeArray;
        console.log('Here are ten ' + pokemonTypes[i].type + ' pokemon: ');
        console.log(pokemonTypes[i].pokemonArray)
        return;
    });
}

// function assignArrays(data) {
//     pokeArray = data.pokemon;
//     pokemonTypes[i].pokemonArray = pokeArray.slice(0,10);
// }



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
    {type: 'clearSky',//[0] 
    positiveIndex: [2,13,9],
    negativeIndex: [14,7,6,10]
    // flying+[2], dragon+[13] , fire+[9], dark-[14], ghost-[7], bug-[6], water-[10] 
    },
    {type: 'cloudy',//[1]
    positiveIndex: [3,14,1],
    negativeIndex: [0]
    //poison+[3], dark+[14], fighting+[1], normal-[0] 
    },
    {type: 'partlyCloudy', //[2]
    positiveIndex: [3,14,1,6]
    //poison+[3], dark+[14], fighting+[1], bug+[6]
    },
    {type: 'rain',//[3]
    positiveIndex: [10,11,4],
    negativeIndex: [5,8,9,3]
    //water+[10], grass+[11], ground+[4], rock-[5], steel-[8], fire-[9], poison-[3]
    },
    {type: 'thunderstorm',//[4]
    positiveIndex: [12,0],
    negativeIndex: [13,2,9,5]
    //electric+[12], normal+[0], dragon-[13], flying-[2], fire-[9], rock-[5], 
    },
    {type: 'snow',//[5]
    positiveIndex: [0,7,5,8],
    negativeIndex: [4]
    //normal+[0], ghost+[7], rock+[5], steel+[8], ground-[4], 
    },
    {type: 'mist',//[6]
    positiveIndex: [15,7,6],
    negativeIndex: [1,12]
    //fairy+[15], ghost+[7], bug+[6], fighting-[1], electric-[12], 
    },
];
//console.log("this is the array of weatherTypes " + weatherTypes)
//console.log("this is the first Index of weatherTypes " + weatherTypes[0])

var currentWeather = 'thunderstorm';
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

var endpoint = [
    'pokemon', 
    'type',
    'move-damage-class',
    'move-category',
]

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
// //}
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

