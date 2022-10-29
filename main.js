const filmsContainer = document.getElementById(`allFilms`);


/*----FUNCIÓ PER COMUNICAR AMB API I VEURE PELICULES----*/
const mostrar_Pelicules = () => {
    fetch("https://swapi.dev/api/films/").then(response => response.json()).then( data => {
            console.log(data.results[0].title);
        }
    );
    
}

mostrar_Pelicules();

filmsContainer.addEventListener('DOMContentLoaded', () => { mostrar_Pelicules,
console.log('DOM fully loaded and parsed')

});

