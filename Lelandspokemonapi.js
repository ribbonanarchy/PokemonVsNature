var url = 'https://pokeapi.co/api/v2/' + endpoint +'/' + idOrName
var endpoint = 'pokemon'
var idOrName = 35;

function getApi() {
    fetch (url)
    console.log(response)
    .then(function (response){
        
        return response.json();
    })
}