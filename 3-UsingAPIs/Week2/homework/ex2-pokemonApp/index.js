'use strict';
/*------------------------------------------------------------------------------
Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
function fetchData(url /* TODO parameter(s) go here */) {
  // TODO complete this function
  return fetch(url).then((response) => {
    console.log(response);
    return response.json();
  });
}

const button = document.createElement('button');
button.innerHTML = 'Get Bokemon!';
document.body.appendChild(button);
button.style.display = 'block';
button.style.margin = '20px';

const select = document.createElement('select');
document.body.appendChild(select);
select.style.display = 'block';
select.style.marginLeft = '20px';

function fetchAndPopulatePokemons(data /* TODO parameter(s) go here */) {
  // TODO complete this function

  data.results.forEach((element) => {
    const option = document.createElement('option');
    option.value = element.url;
    option.innerHTML = element.name;
    select.appendChild(option);
  });
}

function fetchImage(data /* TODO parameter(s) go here */) {
  // TODO complete this function
  fetchData(data.results[0].url)
    .then((imgDAta) => {
      console.log('imgDAta', imgDAta.results);
    })
    .catch((error) => {
      console.log(error);
    });

  const img = document.createElement('img');
  img.src = data.results[0].url;
  document.body.appendChild(img);
  console.log(data.results[currentTarget.value]);
}

function main() {
  fetchData('https://pokeapi.co/api/v2/pokemon')
    .then((data) => {
      console.log(data.results);
      //renderImage(data);
      fetchAndPopulatePokemons(data);
      fetchImage(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

//select.addEventListener('change', () => {
// fetchImage(url+pokemonList.value, pokemonImage);

// async function main() {
//   // TODO complete this function
//   try {
//     let data = await fetchData('https://xkcd.now.sh/?comic=latest');
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }

button.addEventListener('click', main);
