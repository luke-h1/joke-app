const API_URL =
    'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist';

// variables
const output = document.querySelector('#output');
const loadingElement = document.querySelector('.loading');
const button = document.querySelector('.btn'); 

// set loading element to not display
loadingElement.style.display = 'none';

// async function and await response from API
async function getData() {
    loadingElement.style.display = '';
    await fetch(API_URL)
        .then((res) => res.json())
        .then((res) => {
            loadingElement.style.display = 'none';
            console.log(res);
            
        });
}


button.addEventListener('click', getData); 