/* Fetch = it is a functio used for making Http requests to fetch resources
            (including Json style data, images, files)
            the fetch function simplifies asynchroous data fetching in javascript and is used for interactig with APIs to retrieve and send data asynchroously over the web.
            fetch(url, {options}) it has two arguments the url and an object of options but for this session we will be covering methods i.e {method: "Delete", "Get", "Post"} the default is get
*/

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => console.log())
    .catch(error => console.error(error));
