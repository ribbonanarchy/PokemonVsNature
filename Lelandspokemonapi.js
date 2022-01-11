//var url = 'https://pokeapi.co/api/v2/' + endpoint +'/' + idOrName
var endpoint = [
    'pokemon', 
    'type',
    'move-damage-class',
    'move-category',
]
var idOrName =[
    '1',
    '2',
    '3',
    '4',
    '5',
]
var url = 'https://pokeapi.co/api/v2/' + endpoint[0] + '/' + idOrName[0] + '/' // + "sprites/front_default"



function getApi() {
    fetch (url)
    .then(function (response) {
        console.log('hello')
        console.log(response)
        return response.json();
    })
    
}
getApi();