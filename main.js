const filmsContainer = document.getElementById(`allFilms`);

const api_Url = "https://swapi.dev/api/films/";
const photo_Url = "https://starwars-visualguide.com/assets/img/films/";
let photo_id = 1;


/*----FUNCIÓ PER COMUNICAR AMB API I VEURE PELICULES----*/
const mostrar_Pelicules = () => {
    fetch(api_Url).then(response => response.json()).then( data => {
            data.results.forEach(pelicula => {
                filmsContainer.innerHTML += `
                <article>
                    <h4>
                        ${pelicula.title}
                    </h4>
                    <figure>
                        <img src="${photo_Url}${photo_id}.jpg" alt="${pelicula.title}'s poster " />
                    </figure>
                    <p>
                        ${pelicula.opening_crawl}
                    </p>
                    <h5>In this movie appears:</h5>
                    <p>
                        ${pelicula.characters.length} characters
                    </p>
                    <p>
                        ${pelicula.planets.length} planets
                    </p>
                    <p>
                        ${pelicula.starships.length} spaceships
                    </p>
                    <p>
                        ${pelicula.vehicles.length} vehicles
                    </p>
                    <p>
                        ${pelicula.species.length} species
                    </p>
                </article>`
                photo_id++;
            });
        }
    );
    
}

mostrar_Pelicules();

filmsContainer.addEventListener('DOMContentLoaded', () => { mostrar_Pelicules,
console.log('DOM fully loaded and parsed')

});

