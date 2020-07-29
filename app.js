const form = document.querySelector('#myForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const API_URL =
        'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist';

    fetch(API_URL)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
      
        });
});
