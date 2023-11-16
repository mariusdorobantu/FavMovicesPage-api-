const url = 'http://127.0.0.1:5500/movies.json';
const apiContent = document.querySelector('.apiContent');
const starImgUrl = 'star-filled.svg';

fetch(url)
    .then(response => {
        if(!response.ok) {
            throw new Error(`HTTML error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data)
    
    // const maximumContainers = 6;

        data.forEach((movie, index) => {
            const moviesContainer = document.createElement('div');
            moviesContainer.classList.add('movieContainer');

            const posterImg = document.createElement('img');
            posterImg.src = movie.Poster;

            const imdbRating = document.createElement('p')
            imdbRating.textContent = `(${movie.imdbRating})`

            moviesContainer.appendChild(posterImg);
            moviesContainer.appendChild(imdbRating);
            apiContent.appendChild(moviesContainer);

            for (let i = 0; i < 5; i++) {
                const starImg = document.createElement('img');
                starImg.src = starImgUrl;
                starImg.classList.add('starImg')
                moviesContainer.appendChild(starImg);
            }
        });
    })

