/* 
This shit works.... 
*/

// const form = document.querySelector('#myForm');

// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     const API_URL =
//         'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist';

//     fetch(API_URL)
//         .then((res) => res.json())
//         .then((res) => {
//             console.log(res);
//             const output = document.querySelector('#output');
//             j
//         });
// });

/* this shit probably won't work....
 */

const API_URL =
    'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist';

// variables
const output = document.querySelector('#output');
const loadingElement = document.querySelector('.loading');

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

getData()

